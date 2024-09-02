import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import Conversations from "./insideCoomponents/Conversations";
import Contacts from "./insideCoomponents/Contacts";
import NewConversationsModal from "./insideCoomponents/NewConversationsModal";
import NewContactModal from "./insideCoomponents/NewContactModal";
import OpenConversation from "./insideCoomponents/OpenConversation";
import { useConversations } from "./context/ConversationProvider";

const Sidebar = ({ userId, userDetails }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { selectedConversation } = useConversations();

  // console.log(selectedConversation);
  return (
    <>
      <div
        className="flex bg-light-bac fontpro-text overflow-hidden 2xl:w-[1200px] mx-auto"
        style={{
          background: "#efeae2 url('bg/tp-light-bg.png') center",
          backgroundSize: "300px ",
        }}
      >
        <div className="h-screen w-[60px] bg-secondary-gray">
          <nav className="flex flex-col justify-between h-full py-3 ">
            <ul className=" flex items-center flex-col grow-[1] gap-4">
              <li
                className="text-3xl border bg-secondaryL-g text-slate-500 p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <title>chats-filled</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501ZM8 14.5C8 13.6716 8.67157 13 9.5 13H14.5C15.3284 13 16 13.6716 16 14.5C16 15.3284 15.3284 16 14.5 16H9.5C8.67157 16 8 15.3284 8 14.5ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H16.5C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8H9.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M5 8.70356L5.41919 8.43101L5.5 8.55531V8.70356H5ZM4.8384 8.45501L4.41921 8.72756L4.41917 8.7275L4.8384 8.45501ZM2.5927 5L2.17347 5.27249L1.67137 4.5H2.5927V5ZM4.58081 8.9761L4.41921 8.72756L5.25759 8.18247L5.41919 8.43101L4.58081 8.9761ZM4.5 9V8.70356H5.5V9H4.5ZM4.5 17.8333V9H5.5V17.8333H4.5ZM6.6667 20C5.47006 20 4.5 19.0299 4.5 17.8333H5.5C5.5 18.4777 6.02234 19 6.6667 19V20ZM20.3333 20H6.6667V19H20.3333V20ZM22.5 17.8333C22.5 19.0299 21.53 20 20.3333 20V19C20.9777 19 21.5 18.4777 21.5 17.8333H22.5ZM22.5 6.66667V17.8333H21.5V6.66667H22.5ZM20.3333 4.5C21.53 4.5 22.5 5.47005 22.5 6.66667H21.5C21.5 6.02233 20.9777 5.5 20.3333 5.5V4.5ZM2.5927 4.5H20.3333V5.5H2.5927V4.5ZM4.41917 8.7275L2.17347 5.27249L3.01192 4.72751L5.25762 8.18252L4.41917 8.7275ZM9.5 13.5C8.94772 13.5 8.5 13.9477 8.5 14.5H7.5C7.5 13.3954 8.39543 12.5 9.5 12.5V13.5ZM14.5 13.5H9.5V12.5H14.5V13.5ZM15.5 14.5C15.5 13.9477 15.0523 13.5 14.5 13.5V12.5C15.6046 12.5 16.5 13.3954 16.5 14.5H15.5ZM14.5 15.5C15.0523 15.5 15.5 15.0523 15.5 14.5H16.5C16.5 15.6046 15.6046 16.5 14.5 16.5V15.5ZM9.5 15.5H14.5V16.5H9.5V15.5ZM8.5 14.5C8.5 15.0523 8.94772 15.5 9.5 15.5V16.5C8.39543 16.5 7.5 15.6046 7.5 14.5H8.5ZM7.5 9.5C7.5 8.39543 8.39543 7.5 9.5 7.5V8.5C8.94772 8.5 8.5 8.94772 8.5 9.5H7.5ZM9.5 11.5C8.39543 11.5 7.5 10.6046 7.5 9.5H8.5C8.5 10.0523 8.94772 10.5 9.5 10.5V11.5ZM16.5 11.5H9.5V10.5H16.5V11.5ZM18.5 9.5C18.5 10.6046 17.6046 11.5 16.5 11.5V10.5C17.0523 10.5 17.5 10.0523 17.5 9.5H18.5ZM16.5 7.5C17.6046 7.5 18.5 8.39543 18.5 9.5H17.5C17.5 8.94772 17.0523 8.5 16.5 8.5V7.5ZM9.5 7.5H16.5V8.5H9.5V7.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li
                className="text-3xl hover:bg-secondaryL-g p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <title>status-outline</title>
                  <path
                    d="M13.5627 3.13663C13.6586 2.59273 14.1793 2.22466 14.7109 2.37438C15.7904 2.67842 16.8134 3.16256 17.7359 3.80858C18.9322 4.64624 19.9304 5.73574 20.6605 7.0005C21.3906 8.26526 21.8348 9.67457 21.9619 11.1294C22.06 12.2513 21.9676 13.3794 21.691 14.4662C21.5548 15.0014 20.9756 15.2682 20.4567 15.0793C19.9377 14.8903 19.6769 14.317 19.7996 13.7785C19.9842 12.9693 20.0421 12.1343 19.9695 11.3035C19.8678 10.1396 19.5124 9.01218 18.9284 8.00038C18.3443 6.98857 17.5457 6.11697 16.5887 5.44684C15.9055 4.96844 15.1535 4.601 14.3605 4.3561C13.8328 4.19314 13.4668 3.68052 13.5627 3.13663Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.8943 17.785C19.3174 18.14 19.3758 18.7749 18.9803 19.1604C18.1773 19.9433 17.2465 20.5872 16.2257 21.0631C14.9022 21.6802 13.4595 22 11.9992 21.9999C10.5388 21.9998 9.09621 21.6798 7.77275 21.0625C6.75208 20.5865 5.82137 19.9424 5.01843 19.1595C4.62302 18.7739 4.68155 18.139 5.10467 17.784C5.52779 17.4291 6.15471 17.4898 6.55964 17.8654C7.16816 18.4298 7.86233 18.8974 8.61817 19.25C9.67695 19.7438 10.831 19.9998 11.9993 19.9999C13.1676 20 14.3217 19.7442 15.3806 19.2505C16.1365 18.898 16.8307 18.4304 17.4393 17.8661C17.8443 17.4906 18.4712 17.43 18.8943 17.785Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3.54265 15.0781C3.02367 15.267 2.44458 15.0001 2.30844 14.4649C2.03202 13.3781 1.93978 12.2502 2.03794 11.1283C2.16521 9.67361 2.60953 8.26444 3.33966 6.99984C4.06979 5.73523 5.06802 4.64587 6.2642 3.80832C7.18668 3.1624 8.20962 2.67833 9.28902 2.37434C9.82063 2.22462 10.3413 2.59271 10.4372 3.1366C10.5331 3.6805 10.1671 4.19311 9.63938 4.35607C8.84645 4.60094 8.09446 4.96831 7.41133 5.44663C6.45439 6.11667 5.65581 6.98816 5.0717 7.99985C4.4876 9.01153 4.13214 10.1389 4.03032 11.3026C3.95764 12.1334 4.01547 12.9683 4.19986 13.7775C4.32257 14.3159 4.06162 14.8892 3.54265 15.0781Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 16C14.2091 16 15.9999 14.2092 15.9999 12C15.9999 9.79088 14.2091 8.00002 11.9999 8.00002C9.7908 8.00002 7.99994 9.79088 7.99994 12C7.99994 14.2092 9.7908 16 11.9999 16ZM11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68631 15.3136 6.00002 11.9999 6.00002C8.68623 6.00002 5.99994 8.68631 5.99994 12C5.99994 15.3137 8.68623 18 11.9999 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li
                className="text-3xl hover:bg-secondaryL-g  p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <title>newsletter-outline</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li
                className="text-3xl hover:bg-secondaryL-g  p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <title>community-outline</title>
                  <path
                    d="M19.992 17C20.0031 16.2628 20.0099 15.9937 19.9606 15.4041C19.9559 15.347 19.9506 15.2962 19.9447 15.253C19.9007 14.9282 19.8237 14.6238 19.7226 14.3419C19.68 14.2233 19.6332 14.1094 19.5828 13.9999C19.5738 13.9805 19.5647 13.9611 19.5555 13.942C19.4612 13.7454 19.355 13.5636 19.2404 13.3956C19.3264 13.392 19.4137 13.3898 19.5023 13.3892L19.5555 13.389C20.2632 13.389 20.8883 13.4899 21.401 13.6205C21.4627 13.6362 21.5228 13.6523 21.5813 13.6688L21.5915 13.6717L21.6087 13.6766C22.069 13.8088 22.5875 14.0227 23.0245 14.3595C23.4788 14.7097 23.8921 15.2338 23.9736 15.9559C24.0117 16.2932 24 16.0153 23.9908 16.4244C23.9744 17.1535 23.3769 19 22.6608 19H19.6869C19.8643 18.6252 19.9692 17.9298 19.9822 17.4856C19.985 17.3925 19.9887 17.2199 19.992 17Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M2.41872 13.6688C2.47715 13.6524 2.53726 13.6362 2.599 13.6205C3.11171 13.49 3.73676 13.389 4.44446 13.389L4.49762 13.3892C4.58626 13.3899 4.67357 13.3921 4.7595 13.3957C4.64492 13.5637 4.53872 13.7455 4.44444 13.942C4.43524 13.9612 4.42615 13.9805 4.41718 14C4.36671 14.1094 4.31992 14.2234 4.27738 14.342C4.17628 14.6239 4.09928 14.9283 4.05525 15.253C4.04938 15.2963 4.04409 15.347 4.03932 15.4041C3.99008 15.9938 3.99682 16.2629 4.00795 17C4.01127 17.22 4.01498 17.3926 4.01771 17.4857C4.03074 17.9298 4.13562 18.6252 4.31303 19H1.33916C0.623061 19 0.0256195 18.1535 0.00922726 17.4245C2.95136e-05 17.0154 -0.0117388 16.2932 0.0263682 15.9559C0.107939 15.2339 0.521192 14.7098 0.975466 14.3596C1.41245 14.0228 1.9309 13.8088 2.39128 13.6766L2.40848 13.6717L2.41872 13.6688Z"
                    fill="currentColor"
                  ></path>
                  <mask
                    id="mask0_210_34"
                    maskUnits="userSpaceOnUse"
                    x="5"
                    y="12"
                    width="14"
                    height="7"
                    style={{maskType: 'alpha'}}
                  >
                    <path
                      d="M6.37097 18.6728C6.22771 18.5403 6.10436 18.3762 6.00893 18.1973C5.88016 17.9559 5.80223 17.6876 5.79477 17.4335C5.77998 16.9291 5.757 15.9342 5.81696 15.4918C5.84373 15.2944 5.89027 15.111 5.95085 14.9421C6.02317 14.7405 6.11797 14.5597 6.2284 14.3977C6.44704 14.077 6.72693 13.8296 7.01492 13.6386C7.049 13.616 7.08319 13.5941 7.11741 13.5731C7.57939 13.2888 8.09607 13.1117 8.52836 12.9865C8.90312 12.878 9.34966 12.7693 9.85708 12.6823C10.4851 12.5746 11.2063 12.5001 12 12.5001C12.7938 12.5001 13.515 12.5746 14.143 12.6823C14.6504 12.7693 15.0969 12.878 15.4717 12.9865C15.904 13.1117 16.4207 13.2888 16.8826 13.5731C16.9169 13.5941 16.9511 13.616 16.9851 13.6386C17.2731 13.8296 17.553 14.077 17.7717 14.3977C17.8821 14.5597 17.9769 14.7405 18.0492 14.9421C18.1098 15.111 18.1563 15.2944 18.1831 15.4918C18.2431 15.9342 18.2201 16.9291 18.2053 17.4335C18.1978 17.6876 18.1199 17.9559 17.9911 18.1973C17.8957 18.3762 17.7723 18.5403 17.6291 18.6729C17.4139 18.872 17.1537 19 16.8757 19H7.12439C6.84638 19 6.5862 18.872 6.37097 18.6728Z"
                      fill="#54656F"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_210_34)">
                    <path
                      d="M7.56768 14.4719L7.56768 14.4719C7.59198 14.4558 7.61659 14.4401 7.64147 14.4248L7.64147 14.4248C7.98806 14.2115 8.4022 14.0641 8.80649 13.9471C9.14887 13.8479 9.55891 13.7481 10.0261 13.6679C10.6043 13.5688 11.2688 13.5001 12 13.5001C12.7313 13.5001 13.3957 13.5688 13.974 13.6679C14.4411 13.7481 14.8512 13.8479 15.1936 13.9471C15.5979 14.0641 16.012 14.2115 16.3586 14.4248L16.3586 14.4248C16.3835 14.4401 16.4081 14.4558 16.4324 14.4719L16.9811 13.6446L16.4324 14.4719C16.6396 14.6094 16.8159 14.771 16.9454 14.9609L17.7717 14.3977L16.9454 14.9609C17.0104 15.0564 17.0656 15.1617 17.1079 15.2797C17.1457 15.3851 17.1751 15.5004 17.1922 15.6261L18.1831 15.4918L17.1922 15.6262C17.2383 15.9667 17.2217 16.8608 17.2057 17.4042C17.2034 17.4827 17.1757 17.6012 17.1088 17.7266L17.9911 18.1973L17.1088 17.7266C17.0607 17.8168 17.0035 17.8893 16.9499 17.9389L17.6291 18.6729L16.9499 17.9389C16.9101 17.9757 16.8804 17.9925 16.8663 17.9989C16.8653 17.9993 16.8644 17.9997 16.8637 18H7.1364C7.13563 17.9997 7.13475 17.9993 7.13377 17.9989C7.11966 17.9925 7.08998 17.9757 7.05017 17.9389C6.99657 17.8893 6.93934 17.8168 6.89125 17.7266C6.82433 17.6012 6.79665 17.4827 6.79434 17.4042C6.77841 16.8608 6.76173 15.9667 6.8079 15.6262C6.82495 15.5004 6.85436 15.3851 6.89215 15.2797C6.93448 15.1617 6.98966 15.0564 7.05471 14.9609L6.30134 14.4474L7.05471 14.9609C7.18421 14.771 7.36045 14.6094 7.56768 14.4719Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </g>
                  <mask
                    id="mask1_210_34"
                    maskUnits="userSpaceOnUse"
                    x="8"
                    y="4"
                    width="8"
                    height="8"
                    style={{maskType: 'alpha'}}
                  >
                    <path
                      d="M9.91613 9.03805L9.10219 9.61901L9.91613 9.03805C9.86836 8.97113 9.82379 8.90186 9.78264 8.83049L8.91633 9.33L9.78264 8.83049C9.56772 8.45776 9.44434 8.02519 9.44434 7.56C9.44434 7.42212 9.45517 7.28739 9.47586 7.15644C9.66888 5.93473 10.7278 5 11.9999 5C13.2719 5 14.3309 5.93473 14.5239 7.15644C14.5446 7.28739 14.5554 7.42212 14.5554 7.56C14.5554 8.02519 14.432 8.45776 14.2171 8.83049C14.176 8.90186 14.1314 8.97113 14.0836 9.03805C13.8774 9.32698 13.6122 9.57121 13.306 9.75311C12.9248 9.97956 12.4793 10.11 11.9999 10.11C11.5204 10.11 11.0749 9.97956 10.6937 9.75311C10.3875 9.57121 10.1224 9.32698 9.91613 9.03805Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </mask>
                  <g mask="url(#mask1_210_34)">
                    <path
                      d="M15.0834 9.33C15.0261 9.42949 14.964 9.52593 14.8976 9.61901C14.6109 10.0206 14.2426 10.3599 13.8167 10.6129C13.285 10.9287 12.6637 11.11 11.9999 11.11C11.3361 11.11 10.7147 10.9287 10.183 10.6129C9.75719 10.3599 9.38885 10.0206 9.10219 9.61901C9.03575 9.52593 8.97369 9.42949 8.91633 9.33C8.61608 8.80927 8.44434 8.20499 8.44434 7.56C8.44434 7.36964 8.4593 7.18272 8.48811 7.00038C8.75647 5.30182 10.2266 4 11.9999 4C13.7732 4 15.2433 5.30182 15.5117 7.00038C15.5405 7.18272 15.5554 7.36964 15.5554 7.56C15.5554 8.20499 15.3837 8.80927 15.0834 9.33Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <path
                    d="M7.01994 10.0243C7.07943 9.80287 7.11115 9.57012 7.11115 9.33004C7.11115 8.65375 6.8594 8.03766 6.44449 7.56909C5.95586 7.01727 5.24095 6.67004 4.44449 6.67004C2.97174 6.67004 1.77783 7.85729 1.77783 9.33004C1.77783 10.232 2.22561 11.0306 2.91099 11.5142C3.34475 11.8202 3.87368 12 4.44449 12C4.57186 12 4.69716 11.9911 4.81976 11.9738C5.28441 11.9082 5.7106 11.7225 6.06612 11.4492C6.52468 11.0968 6.86567 10.5986 7.01994 10.0243Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.934 11.4493C18.2895 11.7225 18.7157 11.9082 19.1803 11.9738C19.3029 11.9911 19.4282 12 19.5556 12C20.1264 12 20.6553 11.8202 21.0891 11.5141C21.7745 11.0306 22.2222 10.232 22.2222 9.33004C22.2222 7.85729 21.0283 6.67004 19.5556 6.67004C18.7591 6.67004 18.0442 7.01727 17.5556 7.56909C17.1407 8.03766 16.8889 8.65375 16.8889 9.33004C16.8889 9.57012 16.9206 9.80287 16.9801 10.0243C17.1344 10.5986 17.4754 11.0968 17.934 11.4493Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li
                className="text-3xl hover:bg-secondaryL-g  p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <img className=" w-6 object-cover" src="https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png" alt="" />
              </li>
            </ul>

            <ul className=" flex items-center flex-col h-[20%] gap-3">
              <li
                className="text-3xl hover:bg-secondaryL-g p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <AiOutlineSetting />
              </li>
              <li
                className="text-3xl p-2 rounded-full cursor-pointer"
                onClick={() => setCurrentTab(0)}
              >
                <img className="border w-10 h-10 object-cover rounded-full flex items-center justify-center text-center text-sm" loading="lazy" src={userDetails?.userImagE} alt="Eror" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-[95%] flex ">
          {currentTab == 0 ? (
            <Conversations
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          ) : null}
          {currentTab == 1 ? (
            <Contacts currentTab={currentTab} setCurrentTab={setCurrentTab} />
          ) : null}

          {currentTab == 2 ? (
            <NewConversationsModal
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          ) : null}
          {currentTab == 3 ? (
            <NewContactModal
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          ) : null}

          <div className="flex-grow">
            {selectedConversation && <OpenConversation />}
          </div>
        </div>
      </div>

      <div className=" absolute top-0 right-0 my-2 mx-3">
        user id : {userId}
      </div>
    </>
  );
};

export default Sidebar;
