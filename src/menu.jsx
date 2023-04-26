import React, { useState } from "react";

function CollapsibleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute py-4  z-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 bottom-10">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg className="inline mx-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.74935 12L4.51602 10.0667C4.3049 10.0111 4.07446 9.914 3.82468 9.77533C3.57446 9.63622 3.36602 9.48889 3.19935 9.33333L1.41602 10.0833L0.166016 7.91667L1.71602 6.75C1.69379 6.63889 1.67446 6.51933 1.65802 6.39133C1.64113 6.26378 1.63268 6.13889 1.63268 6.01667C1.63268 5.90556 1.64113 5.786 1.65802 5.658C1.67446 5.53044 1.69379 5.39444 1.71602 5.25L0.166016 4.08333L1.41602 1.95L3.18268 2.68333C3.38268 2.51667 3.59668 2.36667 3.82468 2.23333C4.05224 2.1 4.27713 2 4.49935 1.93333L4.74935 0H7.24935L7.48268 1.93333C7.73824 2.03333 7.96335 2.13889 8.15802 2.25C8.35224 2.36111 8.5549 2.50556 8.76601 2.68333L10.5827 1.95L11.8327 4.08333L10.2327 5.28333C10.2771 5.41667 10.2993 5.54178 10.2993 5.65867C10.2993 5.77511 10.2993 5.88889 10.2993 6C10.2993 6.1 10.2967 6.20844 10.2913 6.32533C10.2856 6.44178 10.266 6.58333 10.2327 6.75L11.7993 7.91667L10.5493 10.0833L8.76601 9.31667C8.5549 9.49444 8.34668 9.64444 8.14135 9.76667C7.93557 9.88889 7.71602 9.98889 7.48268 10.0667L7.24935 12H4.74935ZM5.98268 7.66667C6.44935 7.66667 6.84379 7.50556 7.16602 7.18333C7.48824 6.86111 7.64935 6.46667 7.64935 6C7.64935 5.53333 7.48824 5.13889 7.16602 4.81667C6.84379 4.49444 6.44935 4.33333 5.98268 4.33333C5.51602 4.33333 5.12157 4.49444 4.79935 4.81667C4.47713 5.13889 4.31602 5.53333 4.31602 6C4.31602 6.46667 4.47713 6.86111 4.79935 7.18333C5.12157 7.50556 5.51602 7.66667 5.98268 7.66667ZM5.98268 7C5.7049 7 5.4689 6.90267 5.27468 6.708C5.08002 6.51378 4.98268 6.27778 4.98268 6C4.98268 5.72222 5.08002 5.48622 5.27468 5.292C5.4689 5.09733 5.7049 5 5.98268 5C6.26046 5 6.49668 5.09733 6.69135 5.292C6.88557 5.48622 6.98268 5.72222 6.98268 6C6.98268 6.27778 6.88557 6.51378 6.69135 6.708C6.49668 6.90267 6.26046 7 5.98268 7ZM5.33268 11.3333H6.63268L6.88268 9.53333C7.21602 9.44444 7.5189 9.32222 7.79135 9.16667C8.06335 9.01111 8.33824 8.79444 8.61602 8.51667L10.266 9.23333L10.9327 8.1L9.48268 7C9.53824 6.81111 9.57446 6.636 9.59135 6.47467C9.60779 6.31378 9.61601 6.15556 9.61601 6C9.61601 5.83333 9.60779 5.67489 9.59135 5.52467C9.57446 5.37489 9.53824 5.20556 9.48268 5.01667L10.966 3.9L10.2993 2.76667L8.59935 3.48333C8.39935 3.26111 8.13557 3.05267 7.80802 2.858C7.48002 2.66378 7.16602 2.53333 6.86602 2.46667L6.66602 0.666667H5.33268L5.13268 2.46667C4.79935 2.53333 4.4909 2.64711 4.20735 2.808C3.92424 2.96933 3.64379 3.18889 3.36602 3.46667L1.69935 2.76667L1.03268 3.9L2.48268 4.98333C2.42713 5.12778 2.38824 5.28889 2.36602 5.46667C2.34379 5.64444 2.33268 5.82778 2.33268 6.01667C2.33268 6.18333 2.34379 6.35 2.36602 6.51667C2.38824 6.68333 2.42157 6.84444 2.46602 7L1.03268 8.1L1.69935 9.23333L3.34935 8.53333C3.61602 8.8 3.88824 9.01111 4.16602 9.16667C4.44379 9.32222 4.76046 9.44444 5.11602 9.53333L5.33268 11.3333Z" fill="#56616B"/>
            </svg>            
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg className="inline mx-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00026 1.81668C0.778038 1.81668 0.586483 1.73602 0.425594 1.57468C0.26426 1.41379 0.183594 1.22224 0.183594 1.00002C0.183594 0.777794 0.26426 0.586016 0.425594 0.424683C0.586483 0.263794 0.778038 0.18335 1.00026 0.18335C1.22248 0.18335 1.41426 0.263794 1.57559 0.424683C1.73648 0.586016 1.81693 0.777794 1.81693 1.00002C1.81693 1.22224 1.73648 1.41379 1.57559 1.57468C1.41426 1.73602 1.22248 1.81668 1.00026 1.81668ZM5.00026 9.81668C4.77804 9.81668 4.58626 9.73624 4.42493 9.57535C4.26404 9.41402 4.18359 9.22224 4.18359 9.00002C4.18359 8.77779 4.26404 8.58602 4.42493 8.42468C4.58626 8.26379 4.77804 8.18335 5.00026 8.18335C5.22248 8.18335 5.41426 8.26379 5.57559 8.42468C5.73648 8.58602 5.81693 8.77779 5.81693 9.00002C5.81693 9.22224 5.73648 9.41402 5.57559 9.57535C5.41426 9.73624 5.22248 9.81668 5.00026 9.81668ZM1.00026 9.81668C0.778038 9.81668 0.586483 9.73624 0.425594 9.57535C0.26426 9.41402 0.183594 9.22224 0.183594 9.00002C0.183594 8.77779 0.26426 8.58602 0.425594 8.42468C0.586483 8.26379 0.778038 8.18335 1.00026 8.18335C1.22248 8.18335 1.41426 8.26379 1.57559 8.42468C1.73648 8.58602 1.81693 8.77779 1.81693 9.00002C1.81693 9.22224 1.73648 9.41402 1.57559 9.57535C1.41426 9.73624 1.22248 9.81668 1.00026 9.81668ZM1.00026 5.81668C0.778038 5.81668 0.586483 5.73624 0.425594 5.57535C0.26426 5.41402 0.183594 5.22224 0.183594 5.00002C0.183594 4.77779 0.26426 4.58602 0.425594 4.42468C0.586483 4.26379 0.778038 4.18335 1.00026 4.18335C1.22248 4.18335 1.41426 4.26379 1.57559 4.42468C1.73648 4.58602 1.81693 4.77779 1.81693 5.00002C1.81693 5.22224 1.73648 5.41402 1.57559 5.57535C1.41426 5.73624 1.22248 5.81668 1.00026 5.81668ZM5.00026 5.81668C4.77804 5.81668 4.58626 5.73624 4.42493 5.57535C4.26404 5.41402 4.18359 5.22224 4.18359 5.00002C4.18359 4.77779 4.26404 4.58602 4.42493 4.42468C4.58626 4.26379 4.77804 4.18335 5.00026 4.18335C5.22248 4.18335 5.41426 4.26379 5.57559 4.42468C5.73648 4.58602 5.81693 4.77779 5.81693 5.00002C5.81693 5.22224 5.73648 5.41402 5.57559 5.57535C5.41426 5.73624 5.22248 5.81668 5.00026 5.81668ZM9.00026 1.81668C8.77804 1.81668 8.58648 1.73602 8.42559 1.57468C8.26426 1.41379 8.18359 1.22224 8.18359 1.00002C8.18359 0.777794 8.26426 0.586016 8.42559 0.424683C8.58648 0.263794 8.77804 0.18335 9.00026 0.18335C9.22248 0.18335 9.41426 0.263794 9.57559 0.424683C9.73648 0.586016 9.81693 0.777794 9.81693 1.00002C9.81693 1.22224 9.73648 1.41379 9.57559 1.57468C9.41426 1.73602 9.22248 1.81668 9.00026 1.81668ZM5.00026 1.81668C4.77804 1.81668 4.58626 1.73602 4.42493 1.57468C4.26404 1.41379 4.18359 1.22224 4.18359 1.00002C4.18359 0.777794 4.26404 0.586016 4.42493 0.424683C4.58626 0.263794 4.77804 0.18335 5.00026 0.18335C5.22248 0.18335 5.41426 0.263794 5.57559 0.424683C5.73648 0.586016 5.81693 0.777794 5.81693 1.00002C5.81693 1.22224 5.73648 1.41379 5.57559 1.57468C5.41426 1.73602 5.22248 1.81668 5.00026 1.81668ZM9.00026 5.81668C8.77804 5.81668 8.58648 5.73624 8.42559 5.57535C8.26426 5.41402 8.18359 5.22224 8.18359 5.00002C8.18359 4.77779 8.26426 4.58602 8.42559 4.42468C8.58648 4.26379 8.77804 4.18335 9.00026 4.18335C9.22248 4.18335 9.41426 4.26379 9.57559 4.42468C9.73648 4.58602 9.81693 4.77779 9.81693 5.00002C9.81693 5.22224 9.73648 5.41402 9.57559 5.57535C9.41426 5.73624 9.22248 5.81668 9.00026 5.81668ZM9.00026 9.81668C8.77804 9.81668 8.58648 9.73624 8.42559 9.57535C8.26426 9.41402 8.18359 9.22224 8.18359 9.00002C8.18359 8.77779 8.26426 8.58602 8.42559 8.42468C8.58648 8.26379 8.77804 8.18335 9.00026 8.18335C9.22248 8.18335 9.41426 8.26379 9.57559 8.42468C9.73648 8.58602 9.81693 8.77779 9.81693 9.00002C9.81693 9.22224 9.73648 9.41402 9.57559 9.57535C9.41426 9.73624 9.22248 9.81668 9.00026 9.81668Z" fill="#56616B"/>
            </svg>
            
              Integrations
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg className="inline mx-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666667 9.04995V10.25C0.666667 10.3611 0.708445 10.4582 0.792 10.5413C0.875111 10.6248 0.972222 10.6666 1.08333 10.6666H10.9167C11.0278 10.6666 11.1249 10.6248 11.208 10.5413C11.2916 10.4582 11.3333 10.3611 11.3333 10.25V9.04995H0.666667ZM1.08333 2.69995H3.3C3.24444 2.59995 3.19733 2.4944 3.15867 2.38328C3.11956 2.27217 3.1 2.15551 3.1 2.03328C3.1 1.65551 3.22778 1.33884 3.48333 1.08328C3.73889 0.827729 4.05556 0.699951 4.43333 0.699951C4.65556 0.699951 4.864 0.758173 5.05867 0.874618C5.25289 0.991506 5.42222 1.13884 5.56667 1.31662L5.96667 1.86662L6.38333 1.31662C6.52778 1.12773 6.69733 0.977729 6.892 0.866618C7.08622 0.755507 7.29444 0.699951 7.51667 0.699951C7.89444 0.699951 8.21111 0.827729 8.46667 1.08328C8.72222 1.33884 8.85 1.65551 8.85 2.03328C8.85 2.15551 8.83333 2.27217 8.8 2.38328C8.76667 2.4944 8.71667 2.59995 8.65 2.69995H10.9167C11.2278 2.69995 11.4862 2.80262 11.692 3.00795C11.8973 3.21373 12 3.46662 12 3.76662V10.25C12 10.5611 11.8973 10.8195 11.692 11.0253C11.4862 11.2306 11.2278 11.3333 10.9167 11.3333H1.08333C0.772222 11.3333 0.514 11.2306 0.308667 11.0253C0.102889 10.8195 0 10.5611 0 10.25V3.76662C0 3.46662 0.102889 3.21373 0.308667 3.00795C0.514 2.80262 0.772222 2.69995 1.08333 2.69995ZM0.666667 7.61662H11.3333V3.76662C11.3333 3.66662 11.2916 3.57484 11.208 3.49128C11.1249 3.40817 11.0278 3.36662 10.9167 3.36662H7.03333L8.36667 5.18328L7.83333 5.56662L5.96667 3.03328L4.11667 5.56662L3.58333 5.18328L4.9 3.36662H1.08333C0.972222 3.36662 0.875111 3.40817 0.792 3.49128C0.708445 3.57484 0.666667 3.66662 0.666667 3.76662V7.61662ZM4.43333 2.69995C4.62222 2.69995 4.78067 2.63595 4.90867 2.50795C5.03622 2.3804 5.1 2.22217 5.1 2.03328C5.1 1.8444 5.03622 1.68617 4.90867 1.55862C4.78067 1.43062 4.62222 1.36662 4.43333 1.36662C4.24444 1.36662 4.08622 1.43062 3.95867 1.55862C3.83067 1.68617 3.76667 1.8444 3.76667 2.03328C3.76667 2.22217 3.83067 2.3804 3.95867 2.50795C4.08622 2.63595 4.24444 2.69995 4.43333 2.69995ZM7.51667 2.69995C7.70556 2.69995 7.864 2.63595 7.992 2.50795C8.11956 2.3804 8.18333 2.22217 8.18333 2.03328C8.18333 1.8444 8.11956 1.68617 7.992 1.55862C7.864 1.43062 7.70556 1.36662 7.51667 1.36662C7.32778 1.36662 7.16933 1.43062 7.04133 1.55862C6.91378 1.68617 6.85 1.8444 6.85 2.03328C6.85 2.22217 6.91378 2.3804 7.04133 2.50795C7.16933 2.63595 7.32778 2.69995 7.51667 2.69995Z" fill="#56616B"/>
            </svg>
            
              Refer and Earn
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg className="inline mx-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 5.63333C7.8 5.63333 8.19444 5.47222 8.51667 5.15C8.83889 4.82778 9 4.43333 9 3.96667C9 3.51111 8.83889 3.11956 8.51667 2.792C8.19444 2.464 7.8 2.3 7.33333 2.3C6.86667 2.3 6.47222 2.464 6.15 2.792C5.82778 3.11956 5.66667 3.51111 5.66667 3.96667C5.66667 4.43333 5.82778 4.82778 6.15 5.15C6.47222 5.47222 6.86667 5.63333 7.33333 5.63333ZM3.71667 8.63333C4.22778 8.07778 4.79178 7.67222 5.40867 7.41667C6.02511 7.16111 6.66667 7.03333 7.33333 7.03333C8 7.03333 8.64178 7.16111 9.25867 7.41667C9.87511 7.67222 10.4389 8.07778 10.95 8.63333C11.0722 8.63333 11.1667 8.59444 11.2333 8.51667C11.3 8.43889 11.3333 8.33889 11.3333 8.21667V1.08333C11.3333 0.972222 11.2916 0.875111 11.208 0.792C11.1249 0.708445 11.0278 0.666667 10.9167 0.666667H3.75C3.63889 0.666667 3.54178 0.708445 3.45867 0.792C3.37511 0.875111 3.33333 0.972222 3.33333 1.08333V8.21667C3.33333 8.33889 3.36667 8.43889 3.43333 8.51667C3.5 8.59444 3.59444 8.63333 3.71667 8.63333ZM3.75 9.33333C3.43889 9.33333 3.18067 9.23067 2.97533 9.02533C2.76956 8.81956 2.66667 8.56111 2.66667 8.25V1.08333C2.66667 0.772222 2.76956 0.513778 2.97533 0.308C3.18067 0.102667 3.43889 0 3.75 0H10.9167C11.2278 0 11.4862 0.102667 11.692 0.308C11.8973 0.513778 12 0.772222 12 1.08333V8.25C12 8.56111 11.8973 8.81956 11.692 9.02533C11.4862 9.23067 11.2278 9.33333 10.9167 9.33333H3.75ZM1.08333 12C0.772222 12 0.514 11.8973 0.308667 11.692C0.102889 11.4862 0 11.2278 0 10.9167V3C0 2.9 0.0306667 2.81933 0.092 2.758C0.152889 2.69711 0.233333 2.66667 0.333333 2.66667C0.433333 2.66667 0.513778 2.69711 0.574667 2.758C0.636 2.81933 0.666667 2.9 0.666667 3V10.9167C0.666667 11.0389 0.705556 11.1389 0.783333 11.2167C0.861111 11.2944 0.961111 11.3333 1.08333 11.3333H9C9.1 11.3333 9.18067 11.3638 9.242 11.4247C9.30289 11.486 9.33333 11.5667 9.33333 11.6667C9.33333 11.7667 9.30289 11.8473 9.242 11.9087C9.18067 11.9696 9.1 12 9 12H1.08333ZM7.33333 4.96667C7.05556 4.96667 6.81956 4.86933 6.62533 4.67467C6.43067 4.48044 6.33333 4.24444 6.33333 3.96667C6.33333 3.7 6.43067 3.46667 6.62533 3.26667C6.81956 3.06667 7.05556 2.96667 7.33333 2.96667C7.61111 2.96667 7.84711 3.06667 8.04133 3.26667C8.236 3.46667 8.33333 3.7 8.33333 3.96667C8.33333 4.24444 8.236 4.48044 8.04133 4.67467C7.84711 4.86933 7.61111 4.96667 7.33333 4.96667ZM4.65 8.66667H10.0167C9.66111 8.35556 9.25556 8.11667 8.8 7.95C8.34445 7.78333 7.85556 7.7 7.33333 7.7C6.81111 7.7 6.32222 7.78333 5.86667 7.95C5.41111 8.11667 5.00556 8.35556 4.65 8.66667Z" fill="#56616B"/>
            </svg>
            
              Switch account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700  hover:text-orange-600"
              role="menuitem"
            ><svg className="inline mx-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.48412 8.69984L5.01745 8.2165L6.56745 6.6665H0.800781V5.99984H6.56745L5.01745 4.44984L5.48412 3.9665L7.85078 6.33317L5.48412 8.69984ZM5.85078 11.9998V11.3332H10.1341C10.2341 11.3332 10.3259 11.2914 10.4094 11.2078C10.4926 11.1247 10.5341 11.0276 10.5341 10.9165V1.74984C10.5341 1.63873 10.4926 1.54162 10.4094 1.4585C10.3259 1.37495 10.2341 1.33317 10.1341 1.33317H5.85078V0.666504H10.1341C10.4341 0.666504 10.6868 0.769393 10.8921 0.97517C11.0979 1.1805 11.2008 1.43873 11.2008 1.74984V10.9165C11.2008 11.2276 11.0979 11.4861 10.8921 11.6918C10.6868 11.8972 10.4341 11.9998 10.1341 11.9998H5.85078Z" fill="#56616B"/>
            </svg>            
              Log out
            </a>
          </div>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="text-gray-800 font-bold hover:text-gray-700 focus:outline-none focus:text-gray-700 absolute bottom-0 left-0"
      >
      <svg width="12" height="10" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.37496 1.83341C1.15274 1.83341 0.958293 1.75341 0.791626 1.59341C0.624959 1.43397 0.541626 1.23619 0.541626 1.00008C0.541626 0.76397 0.624959 0.565914 0.791626 0.405914C0.958293 0.24647 1.15274 0.166748 1.37496 0.166748C1.61107 0.166748 1.80885 0.24647 1.96829 0.405914C2.12829 0.565914 2.20829 0.76397 2.20829 1.00008C2.20829 1.23619 2.12829 1.43397 1.96829 1.59341C1.80885 1.75341 1.61107 1.83341 1.37496 1.83341ZM5.99996 1.83341C5.76385 1.83341 5.56607 1.75341 5.40663 1.59341C5.24663 1.43397 5.16663 1.23619 5.16663 1.00008C5.16663 0.76397 5.24663 0.565914 5.40663 0.405914C5.56607 0.24647 5.76385 0.166748 5.99996 0.166748C6.23607 0.166748 6.43413 0.24647 6.59413 0.405914C6.75357 0.565914 6.83329 0.76397 6.83329 1.00008C6.83329 1.23619 6.75357 1.43397 6.59413 1.59341C6.43413 1.75341 6.23607 1.83341 5.99996 1.83341ZM10.625 1.83341C10.3888 1.83341 10.1908 1.75341 10.0308 1.59341C9.87135 1.43397 9.79163 1.23619 9.79163 1.00008C9.79163 0.76397 9.87135 0.565914 10.0308 0.405914C10.1908 0.24647 10.3888 0.166748 10.625 0.166748C10.8472 0.166748 11.0416 0.24647 11.2083 0.405914C11.375 0.565914 11.4583 0.76397 11.4583 1.00008C11.4583 1.23619 11.375 1.43397 11.2083 1.59341C11.0416 1.75341 10.8472 1.83341 10.625 1.83341Z" fill="#4D5760"/>
</svg>

      </button>
    </div>
  );
}

export default CollapsibleMenu;
