"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="surface-panel h-full border-white/8">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-copper-400 mb-4 opacity-60" />

                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-copper-400 text-copper-400" />
                      ))}
                    </div>
                  )}

                  <p className="text-sand-100/80 leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-white/8 pt-4">
                    <p className="font-semibold text-sand-50">{testimonial.name}</p>
                    <p className="text-sm text-sand-100/60">
                      {testimonial.role}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
