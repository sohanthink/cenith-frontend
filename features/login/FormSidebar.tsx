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
    <div className="w-1/3 bg-primary rounded-l-4xl p-14 relative overflow-hidden h-fit">
      <Image
        src="/login/sidebar-bg.png"
        alt="Login Sidebar Background"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 w-2/5 object-contain"
      />

      {/* Title */}
      <h2 className="text-white mb-14 relative z-10">{title}</h2>

      {/* Step Indicators */}
      <div className="relative z-10">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id} className="flex items-start gap-4">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
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
                    className={`w-0.5 h-12 ${
                      isActive || isCompleted ? "bg-yellow" : "bg-white/35"
                    }`}
                  />
                )}
              </div>

              {/* Step Label */}
              <div className="pt-2">
                <p
                  className={`font-bold text-lg ${
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
