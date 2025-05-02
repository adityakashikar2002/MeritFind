// import { createGlobalStyle } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     background-color: #f9fafb;
//     color: #1f2937;
//     line-height: 1.5;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

//   button {
//     cursor: pointer;
//     font-family: inherit;
//   }

//   ul {
//     list-style: none;
//   }

//   .container {
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 1rem;
//   }

//   .flex {
//     display: flex;
//   }

//   .flex-col {
//     flex-direction: column;
//   }

//   .items-center {
//     align-items: center;
//   }

//   .justify-center {
//     justify-content: center;
//   }

//   .justify-between {
//     justify-content: space-between;
//   }

//   .gap-2 {
//     gap: 0.5rem;
//   }

//   .gap-4 {
//     gap: 1rem;
//   }

//   .gap-6 {
//     gap: 1.5rem;
//   }

//   .gap-8 {
//     gap: 2rem;
//   }

//   .p-4 {
//     padding: 1rem;
//   }

//   .p-6 {
//     padding: 1.5rem;
//   }

//   .py-4 {
//     padding-top: 1rem;
//     padding-bottom: 1rem;
//   }

//   .px-6 {
//     padding-left: 1.5rem;
//     padding-right: 1.5rem;
//   }

//   .my-6 {
//     margin-top: 1.5rem;
//     margin-bottom: 1.5rem;
//   }

//   .mb-4 {
//     margin-bottom: 1rem;
//   }

//   .mb-6 {
//     margin-bottom: 1.5rem;
//   }

//   .text-center {
//     text-align: center;
//   }

//   .text-sm {
//     font-size: 0.875rem;
//   }

//   .text-lg {
//     font-size: 1.125rem;
//   }

//   .font-bold {
//     font-weight: 700;
//   }

//   .rounded-lg {
//     border-radius: 0.5rem;
//   }

//   .shadow-md {
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   }

//   .bg-white {
//     background-color: #fff;
//   }

//   .bg-gray-100 {
//     background-color: #f3f4f6;
//   }

//   .text-gray-600 {
//     color: #4b5563;
//   }

//   .text-gray-800 {
//     color: #1f2937;
//   }

//   .text-primary {
//     color: #4F46E5;
//   }

//   .btn {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0.5rem 1rem;
//     border-radius: 0.375rem;
//     font-weight: 500;
//     transition: all 0.2s ease;
//     border: 1px solid transparent;
//   }

//   .btn-primary {
//     background-color: #4F46E5;
//     color: white;
//     &:hover {
//       background-color: #4338CA;
//     }
//   }

//   .btn-outline {
//     background-color: transparent;
//     border-color: #D1D5DB;
//     color: #4B5563;
//     &:hover {
//       background-color: #F3F4F6;
//     }
//   }

//   .btn-danger {
//     background-color: #EF4444;
//     color: white;
//     &:hover {
//       background-color: #DC2626;
//     }
//   }

//   .btn-success {
//     background-color: #10B981;
//     color: white;
//     &:hover {
//       background-color: #059669;
//     }
//   }

//   .form-control {
//     display: block;
//     width: 100%;
//     padding: 0.5rem 0.75rem;
//     border: 1px solid #D1D5DB;
//     border-radius: 0.375rem;
//     background-color: #fff;
//     transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//     &:focus {
//       outline: none;
//       border-color: #4F46E5;
//       box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
//     }
//   }

//   .form-label {
//     display: block;
//     margin-bottom: 0.5rem;
//     font-weight: 500;
//     color: #374151;
//   }

//   .card {
//     background-color: #fff;
//     border-radius: 0.5rem;
//     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//     transition: transform 0.2s ease, box-shadow 0.2s ease;
//     &:hover {
//       transform: translateY(-2px);
//       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     }
//   }

//   .grid {
//     display: grid;
//   }

//   .grid-cols-1 {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//   }

//   .grid-cols-2 {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }

//   .grid-cols-3 {
//     grid-template-columns: repeat(3, minmax(0, 1fr));
//   }

//   @media (min-width: 640px) {
//     .sm\\:grid-cols-2 {
//       grid-template-columns: repeat(2, minmax(0, 1fr));
//     }
//   }

//   @media (min-width: 768px) {
//     .md\\:grid-cols-3 {
//       grid-template-columns: repeat(3, minmax(0, 1fr));
//     }
//   }

//   .animate-bounce {
//     animation: bounce 1s infinite;
//   }

//   @keyframes bounce {
//     0%, 100% {
//       transform: translateY(-25%);
//       animation-timing-function: cubic-bezier(0.8,0,1,1);
//     }
//     50% {
//       transform: none;
//       animation-timing-function: cubic-bezier(0,0,0.2,1);
//     }
//   }

//   .confetti {
//     position: fixed;
//     width: 10px;
//     height: 10px;
//     background-color: #f00;
//     opacity: 0;
//     animation: confettiFall 5s linear forwards;
//   }

//   @keyframes confettiFall {
//     0% {
//       transform: translateY(-100vh) rotate(0deg);
//       opacity: 1;
//     }
//     100% {
//       transform: translateY(100vh) rotate(360deg);
//       opacity: 0;
//     }
//   }
// `;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #6366f1;
    --primary-hover: #4f46e5;
    --secondary: #f43f5e;
    --secondary-hover: #e11d48;
    --accent: #10b981;
    --accent-hover: #059669;
    --dark: #1e293b;
    --light: #f8fafc;
    --gray: #94a3b8;
    --gray-light: #e2e8f0;
    --space-unit: 1rem;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: calc(var(--space-unit) * 0.5);
    color: var(--dark);
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1rem; }
  h6 { font-size: 0.875rem; }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: var(--transition);
    &:hover {
      color: var(--primary-hover);
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: var(--space-unit);
    color: var(--dark);
    opacity: 0.9;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    transition: var(--transition);
    &:focus {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
  }

  ul, ol {
    padding-left: calc(var(--space-unit) * 1.5);
    margin-bottom: var(--space-unit);
  }

  /* Layout Utilities */
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 calc(var(--space-unit) * 1.5);
  }

  .section {
    padding: calc(var(--space-unit) * 3) 0;
  }

  .section-sm {
    padding: calc(var(--space-unit) * 2) 0;
  }

  .section-lg {
    padding: calc(var(--space-unit) * 4) 0;
  }

  /* Flex Utilities */
  .flex {
    display: flex;
    gap: var(--gap, var(--space-unit));
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .items-start {
    align-items: flex-start;
  }

  .items-end {
    align-items: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .gap-1 { --gap: calc(var(--space-unit) * 0.25); }
  .gap-2 { --gap: calc(var(--space-unit) * 0.5); }
  .gap-3 { --gap: calc(var(--space-unit) * 0.75); }
  .gap-4 { --gap: var(--space-unit); }
  .gap-5 { --gap: calc(var(--space-unit) * 1.25); }
  .gap-6 { --gap: calc(var(--space-unit) * 1.5); }
  .gap-8 { --gap: calc(var(--space-unit) * 2); }
  .gap-10 { --gap: calc(var(--space-unit) * 2.5); }

  /* Padding Utilities */
  .p-1 { padding: calc(var(--space-unit) * 0.25); }
  .p-2 { padding: calc(var(--space-unit) * 0.5); }
  .p-3 { padding: calc(var(--space-unit) * 0.75); }
  .p-4 { padding: var(--space-unit); }
  .p-5 { padding: calc(var(--space-unit) * 1.25); }
  .p-6 { padding: calc(var(--space-unit) * 1.5); }
  .p-8 { padding: calc(var(--space-unit) * 2); }

  .py-1 { padding-top: calc(var(--space-unit) * 0.25); padding-bottom: calc(var(--space-unit) * 0.25); }
  .py-2 { padding-top: calc(var(--space-unit) * 0.5); padding-bottom: calc(var(--space-unit) * 0.5); }
  .py-3 { padding-top: calc(var(--space-unit) * 0.75); padding-bottom: calc(var(--space-unit) * 0.75); }
  .py-4 { padding-top: var(--space-unit); padding-bottom: var(--space-unit); }
  .py-5 { padding-top: calc(var(--space-unit) * 1.25); padding-bottom: calc(var(--space-unit) * 1.25); }
  .py-6 { padding-top: calc(var(--space-unit) * 1.5); padding-bottom: calc(var(--space-unit) * 1.5); }

  .px-1 { padding-left: calc(var(--space-unit) * 0.25); padding-right: calc(var(--space-unit) * 0.25); }
  .px-2 { padding-left: calc(var(--space-unit) * 0.5); padding-right: calc(var(--space-unit) * 0.5); }
  .px-3 { padding-left: calc(var(--space-unit) * 0.75); padding-right: calc(var(--space-unit) * 0.75); }
  .px-4 { padding-left: var(--space-unit); padding-right: var(--space-unit); }
  .px-5 { padding-left: calc(var(--space-unit) * 1.25); padding-right: calc(var(--space-unit) * 1.25); }
  .px-6 { padding-left: calc(var(--space-unit) * 1.5); padding-right: calc(var(--space-unit) * 1.5); }

  /* Margin Utilities */
  .m-1 { margin: calc(var(--space-unit) * 0.25); }
  .m-2 { margin: calc(var(--space-unit) * 0.5); }
  .m-3 { margin: calc(var(--space-unit) * 0.75); }
  .m-4 { margin: var(--space-unit); }
  .m-5 { margin: calc(var(--space-unit) * 1.25); }
  .m-6 { margin: calc(var(--space-unit) * 1.5); }

  .my-1 { margin-top: calc(var(--space-unit) * 0.25); margin-bottom: calc(var(--space-unit) * 0.25); }
  .my-2 { margin-top: calc(var(--space-unit) * 0.5); margin-bottom: calc(var(--space-unit) * 0.5); }
  .my-3 { margin-top: calc(var(--space-unit) * 0.75); margin-bottom: calc(var(--space-unit) * 0.75); }
  .my-4 { margin-top: var(--space-unit); margin-bottom: var(--space-unit); }
  .my-5 { margin-top: calc(var(--space-unit) * 1.25); margin-bottom: calc(var(--space-unit) * 1.25); }
  .my-6 { margin-top: calc(var(--space-unit) * 1.5); margin-bottom: calc(var(--space-unit) * 1.5); }

  .mb-1 { margin-bottom: calc(var(--space-unit) * 0.25); }
  .mb-2 { margin-bottom: calc(var(--space-unit) * 0.5); }
  .mb-3 { margin-bottom: calc(var(--space-unit) * 0.75); }
  .mb-4 { margin-bottom: var(--space-unit); }
  .mb-5 { margin-bottom: calc(var(--space-unit) * 1.25); }
  .mb-6 { margin-bottom: calc(var(--space-unit) * 1.5); }

  /* Text Utilities */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .text-xs { font-size: 0.75rem; }
  .text-sm { font-size: 0.875rem; }
  .text-base { font-size: 1rem; }
  .text-lg { font-size: 1.125rem; }
  .text-xl { font-size: 1.25rem; }
  .text-2xl { font-size: 1.5rem; }
  .text-3xl { font-size: 1.875rem; }

  .font-light { font-weight: 300; }
  .font-normal { font-weight: 400; }
  .font-medium { font-weight: 500; }
  .font-semibold { font-weight: 600; }
  .font-bold { font-weight: 700; }

  .text-primary { color: var(--primary); }
  .text-secondary { color: var(--secondary); }
  .text-accent { color: var(--accent); }
  .text-dark { color: var(--dark); }
  .text-light { color: var(--light); }
  .text-gray { color: var(--gray); }

  /* Background Utilities */
  .bg-primary { background-color: var(--primary); }
  .bg-secondary { background-color: var(--secondary); }
  .bg-accent { background-color: var(--accent); }
  .bg-dark { background-color: var(--dark); }
  .bg-light { background-color: var(--light); }
  .bg-gray { background-color: var(--gray); }
  .bg-gray-light { background-color: var(--gray-light); }

  /* Border Utilities */
  .rounded-sm { border-radius: var(--radius-sm); }
  .rounded { border-radius: var(--radius-md); }
  .rounded-lg { border-radius: var(--radius-lg); }
  .rounded-full { border-radius: 9999px; }

  .border { border: 1px solid var(--gray-light); }
  .border-t { border-top: 1px solid var(--gray-light); }
  .border-b { border-bottom: 1px solid var(--gray-light); }
  .border-l { border-left: 1px solid var(--gray-light); }
  .border-r { border-right: 1px solid var(--gray-light); }

  /* Shadow Utilities */
  .shadow-sm { box-shadow: var(--shadow-sm); }
  .shadow { box-shadow: var(--shadow); }
  .shadow-md { box-shadow: var(--shadow-md); }
  .shadow-lg { box-shadow: var(--shadow-lg); }
  .shadow-none { box-shadow: none; }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: var(--transition);
    border: none;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .btn-primary {
    background-color: var(--primary);
    color: white;
    &:hover {
      background-color: var(--primary-hover);
      box-shadow: var(--shadow);
    }
  }

  .btn-secondary {
    background-color: var(--secondary);
    color: white;
    &:hover {
      background-color: var(--secondary-hover);
      box-shadow: var(--shadow);
    }
  }

  .btn-accent {
    background-color: var(--accent);
    color: white;
    &:hover {
      background-color: var(--accent-hover);
      box-shadow: var(--shadow);
    }
  }

  .btn-outline {
    background-color: transparent;
    border: 1px solid var(--gray-light);
    color: var(--dark);
    &:hover {
      background-color: var(--gray-light);
      box-shadow: var(--shadow-sm);
    }
  }

  .btn-light {
    background-color: var(--light);
    color: var(--dark);
    &:hover {
      background-color: var(--gray-light);
      box-shadow: var(--shadow-sm);
    }
  }

  .btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  .btn-sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  /* Cards */
  .card {
    background-color: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    overflow: hidden;
    &:hover {
      box-shadow: var(--shadow);
      transform: translateY(-2px);
    }
  }

  .card-header {
    padding: calc(var(--space-unit) * 1.5);
    border-bottom: 1px solid var(--gray-light);
  }

  .card-body {
    padding: calc(var(--space-unit) * 1.5);
  }

  .card-footer {
    padding: calc(var(--space-unit) * 1.5);
    border-top: 1px solid var(--gray-light);
  }

  /* Forms */
  .form-group {
    margin-bottom: var(--space-unit);
  }

  .form-label {
    display: block;
    margin-bottom: calc(var(--space-unit) * 0.5);
    font-weight: 500;
    color: var(--dark);
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.625rem 0.75rem;
    border: 1px solid var(--gray-light);
    border-radius: var(--radius-md);
    background-color: white;
    transition: var(--transition);
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.5;
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
    &::placeholder {
      color: var(--gray);
      opacity: 1;
    }
  }

  .form-text {
    display: block;
    margin-top: calc(var(--space-unit) * 0.5);
    font-size: 0.875rem;
    color: var(--gray);
  }

  /* Grid */
  .grid {
    display: grid;
    gap: var(--gap, var(--space-unit));
  }

  .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
  .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }

  /* Responsive Grid */
  @media (min-width: 640px) {
    .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (min-width: 768px) {
    .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }

  @media (min-width: 1024px) {
    .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade {
    animation: fadeIn 0.5s ease-out;
  }

  .animate-slide {
    animation: slideUp 0.5s ease-out;
  }

  /* Special Effects */
  .hover-scale {
    transition: var(--transition);
    &:hover {
      transform: scale(1.02);
    }
  }

  .hover-rotate {
    transition: var(--transition);
    &:hover {
      transform: rotate(2deg);
    }
  }

  /* Glass Morphism Effect */
  .glass {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  /* Gradient Text */
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(45deg, var(--primary), var(--secondary));
  }

  /* Floating Elements */
  .floating {
    animation: floating 3s ease-in-out infinite;
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  /* Confetti */
  .confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    opacity: 0;
    animation: confettiFall 3s linear forwards;
  }

  @keyframes confettiFall {
    0% {
      transform: translateY(-100vh) rotate(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg) scale(0.5);
      opacity: 0;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
    &:hover {
      background: var(--primary-hover);
    }
  }
`;