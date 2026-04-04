import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_SESSION_COOKIE = "dns_admin_session";
const DEFAULT_ADMIN_USERNAME = "puneet@devkinandanandsons.com";

function compareValues(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() ?? "";
}

export function getAdminUsername() {
  return process.env.ADMIN_USERNAME?.trim() || DEFAULT_ADMIN_USERNAME;
}

function createSessionToken(username: string, password: string) {
  return createHash("sha256").update(`${username}:${password}:devki-admin-session:v1`).digest("hex");
}

function readCookieFromHeader(headerValue: string | null, cookieName: string) {
  if (!headerValue) {
    return "";
  }

  const cookiesList = headerValue.split(";").map((entry) => entry.trim());
  const cookieEntry = cookiesList.find((entry) => entry.startsWith(`${cookieName}=`));
  return cookieEntry ? decodeURIComponent(cookieEntry.slice(cookieName.length + 1)) : "";
}

export function isAdminAuthConfigured() {
  return getAdminPassword().length > 0;
}

export async function verifyAdminSession() {
  if (!isAdminAuthConfigured()) {
    return false;
  }

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value ?? "";
  return compareValues(sessionToken, createSessionToken(getAdminUsername(), getAdminPassword()));
}

export function verifyAdminRequest(request: Request) {
  if (!isAdminAuthConfigured()) {
    return false;
  }

  const sessionToken = readCookieFromHeader(request.headers.get("cookie"), ADMIN_SESSION_COOKIE);
  return compareValues(sessionToken, createSessionToken(getAdminUsername(), getAdminPassword()));
}

export async function createAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(ADMIN_SESSION_COOKIE, createSessionToken(getAdminUsername(), getAdminPassword()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}

export function isCorrectAdminPassword(candidate: string) {
  const password = getAdminPassword();

  if (!password || !candidate) {
    return false;
  }

  return compareValues(candidate, password);
}

export function isCorrectAdminUsername(candidate: string) {
  const username = getAdminUsername();

  if (!candidate) {
    return false;
  }

  return compareValues(candidate.trim().toLowerCase(), username.toLowerCase());
}

export async function requireAdminSession() {
  if (!(await verifyAdminSession())) {
    redirect("/admin/login");
  }
}
