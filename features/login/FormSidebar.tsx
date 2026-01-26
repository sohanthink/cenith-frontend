"use client";

import Image from "next/image";

interface Step {
  id: number;
  title: string;
}

interface FormSidebarProps {
  steps: Step[];
  currentStep: number;
  title: string;
}

export default function FormSidebar({
  steps,
  currentStep,
  title,
}: FormSidebarProps) {
  return (
    <div className="w-full lg:w-1/3 bg-primary rounded-t-2xl lg:rounded-l-4xl lg:rounded-t-none p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 relative overflow-hidden h-fit lg:h-auto">
      <Image
        src="/login/sidebar-bg.png"
        alt="Login Sidebar Background"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 w-2/5 object-contain opacity-50 lg:opacity-100"
        sizes="(max-width: 1024px) 40vw, 200px"
      />

      {/* Title */}
      <h2 className="text-white mb-6 sm:mb-8 md:mb-10 lg:mb-14 relative z-10">
        {title}
      </h2>

      {/* Step Indicators */}
      <div className="relative z-10">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id} className="flex items-start gap-3 sm:gap-4">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all shrink-0 ${
                    isActive
                      ? "border-2 border-yellow text-white"
                      : isCompleted
                        ? "border-2 border-yellow text-white"
                        : "border-2 border-white/35 text-white/35"
                  }`}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-8 sm:h-10 md:h-12 ${
                      isActive || isCompleted ? "bg-yellow" : "bg-white/35"
                    }`}
                  />
                )}
              </div>

              {/* Step Label */}
              <div className="pt-1 sm:pt-1.5 md:pt-2">
                <p
                  className={`font-bold text-sm sm:text-base md:text-lg ${
                    isActive
                      ? "text-white"
                      : isCompleted
                        ? "text-white"
                        : "text-white/35"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
