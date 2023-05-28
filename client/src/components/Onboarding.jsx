import React, { useEffect, useState } from "react";
import logoWtext from '../assets/logo_w_text.png';

export default function Onboarding() {
  
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <img
        className="h-auto w-auto center"
        src={logoWtext}
        alt="Thrive Together"
      />
    </div>
  );
}