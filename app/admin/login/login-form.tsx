"use client";

import { useActionState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { loginAdminAction } from "../actions";

type LoginFormProps = {
  disabled: boolean;
};

const initialAdminLoginState = {
  status: "idle" as const,
  message: "",
};

export default function LoginForm({ disabled }: LoginFormProps) {
  const [state, formAction, pending] = useActionState(loginAdminAction, initialAdminLoginState);

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-2 text-sm text-sand-100/70">
        <span className="font-semibold text-sand-50">Admin user ID</span>
        <input
          name="username"
          type="email"
          required
          disabled={disabled || pending}
          placeholder="puneet@devkinandanandsons.com"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition placeholder:text-sand-100/34 focus:border-signal-400/40 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>

      <label className="grid gap-2 text-sm text-sand-100/70">
        <span className="font-semibold text-sand-50">Admin password</span>
        <input
          name="password"
          type="password"
          required
          disabled={disabled || pending}
          placeholder="Enter the deployment password"
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition placeholder:text-sand-100/34 focus:border-signal-400/40 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>

      {state.message ? (
        <div className="rounded-2xl border border-rose-400/24 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
          {state.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={disabled || pending}
        className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        <LockKeyhole className="h-4 w-4" />
        {pending ? "Checking access" : "Open admin desk"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
