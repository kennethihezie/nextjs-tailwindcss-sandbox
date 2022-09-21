const Animation = () => {
    return (
        <div>
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        className="w-48 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        className="w-48 text-white animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        className="w-48 text-white animate-ping"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        className="w-48 text-white animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
        </div>
    )
}

export default Animation

//  Animate
// animate-none	animation: none;

// animate-spin	animation: spin 1s linear infinite;

// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }


// animate-ping	animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

// @keyframes ping {
//   75%, 100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// }


// animate-pulse	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

// @keyframes pulse {
//   0%, 100% {
//     opacity: 1;
//   }
//   50% {
//     opacity: .5;
//   }
// }


// animate-bounce	animation: bounce 1s infinite;

// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//   }
//   50% {
//     transform: translateY(0);
//     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
// }
