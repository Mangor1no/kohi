export const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M9.82943 19.6686C11.8531 19.6686 13.7227 19.0519 15.2838 18.0111L20.9309 23.6582C21.3744 24.1015 22.1068 24.1015 22.5691 23.6582L23.6677 22.5596C24.111 22.1163 24.111 21.384 23.6677 20.9214L18.0014 15.2936C19.0419 13.7324 19.6589 11.8629 19.6589 9.8392C19.6589 4.42337 15.2453 0.00976562 9.82943 0.00976562C4.41361 0.00976562 0 4.42337 0 9.8392C0 15.2548 4.39433 19.6686 9.82943 19.6686ZM9.82943 3.86444C13.1252 3.86444 15.8042 6.54345 15.8042 9.8392C15.8042 13.1349 13.1252 15.8139 9.82943 15.8139C6.53368 15.8139 3.85468 13.1349 3.85468 9.8392C3.85468 6.54345 6.53368 3.86444 9.82943 3.86444Z"
      fill="#EBEBF0"
    />
  </svg>
);

export const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0C8.51067 0 5.67188 2.8388 5.67188 6.32812C5.67188 9.81745 8.51067 12.6562 12 12.6562C15.4893 12.6562 18.3281 9.81745 18.3281 6.32812C18.3281 2.8388 15.4893 0 12 0Z"
      fill="#EBEBF0"
    />
    <path
      d="M19.8734 16.7904C18.1409 15.0313 15.8442 14.0625 13.4062 14.0625H10.5938C8.15588 14.0625 5.85909 15.0313 4.12659 16.7904C2.40258 18.5409 1.45312 20.8515 1.45312 23.2969C1.45312 23.6852 1.76794 24 2.15625 24H21.8438C22.2321 24 22.5469 23.6852 22.5469 23.2969C22.5469 20.8515 21.5974 18.5409 19.8734 16.7904Z"
      fill="#EBEBF0"
    />
  </svg>
);

export const IconCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#cart)">
      <path
        d="M18.6918 23.6101C20.2911 23.6101 21.5877 22.3136 21.5877 20.7142C21.5877 19.1149 20.2911 17.8184 18.6918 17.8184C17.0924 17.8184 15.7959 19.1149 15.7959 20.7142C15.7959 22.3136 17.0924 23.6101 18.6918 23.6101Z"
        fill="#EBEBF0"
      />
      <path
        d="M23.325 5.02403C23.246 4.9977 23.167 4.9977 23.088 4.9977H6.10767L5.34421 1.12776C5.26523 0.706539 4.87034 0.390625 4.44912 0.390625H0V2.23346H3.68566L6.42358 16.002C6.50256 16.4233 6.89745 16.7392 7.31867 16.7392H20.4818C20.903 16.7392 21.2715 16.4496 21.3768 16.0547L23.9568 6.15605C24.1148 5.65586 23.8252 5.15566 23.325 5.02403Z"
        fill="#EBEBF0"
      />
      <path
        d="M8.45057 23.6101C10.0499 23.6101 11.3464 22.3136 11.3464 20.7142C11.3464 19.1149 10.0499 17.8184 8.45057 17.8184C6.85122 17.8184 5.55469 19.1149 5.55469 20.7142C5.55469 22.3136 6.85122 23.6101 8.45057 23.6101Z"
        fill="#EBEBF0"
      />
    </g>
    <defs>
      <clipPath id="cart">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path
      d="M5.35626 0.566847L3.89159 3.66959L0.614589 4.16875C0.0269265 4.2578 -0.208587 5.01474 0.21758 5.44828L2.58842 7.86204L2.02767 11.2718C1.92674 11.8881 2.54804 12.3498 3.06842 12.0615L6 10.4516L8.93159 12.0615C9.45196 12.3474 10.0733 11.8881 9.97233 11.2718L9.41158 7.86204L11.7824 5.44828C12.2086 5.01474 11.9731 4.2578 11.3854 4.16875L8.10841 3.66959L6.64374 0.566847C6.38131 0.0137904 5.62094 0.00676008 5.35626 0.566847Z"
      fill="#AA4630"
    />
  </svg>
);

export const IconDropdown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
    <path
      d="M7.99975 8L0 0.000248605H3.99978L7.99975 4.00012L11.9995 0L15.9995 0.000248605L7.99975 8Z"
      fill="black"
    />
  </svg>
);

export const IconPaginatePrev = ({ active }) => {
  if (active)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
        <path d="M0 7L7 0V3.5L3.5 7L7 10.5V14L0 7Z" fill="#963C28" />
      </svg>
    );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
      <path d="M0 7L7 0V3.5L3.5 7L7 10.5V14L0 7Z" fill="#8B8C9B" />
    </svg>
  );
};

export const IconPaginateNext = ({ active }) => {
  if (active)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
        <path d="M7 7L0 14V10.5L3.5 7L0 3.5V0L7 7Z" fill="#963C28" />
      </svg>
    );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
      <path d="M7 7L0 14V10.5L3.5 7L0 3.5V0L7 7Z" fill="#8B8C9B" />
    </svg>
  );
};

export const IconPriceRange = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M11.6077 0.559082L0 12.0662L11.6077 23.4457V17.1729L6.36069 12.0002L11.6077 6.82754V0.559082Z"
        fill="#963C28"
      />
      <path
        d="M12.3926 23.4413L24.0003 11.9341L12.3926 0.554688V6.82745L17.6396 12.0001L12.3926 17.1728V23.4413Z"
        fill="#963C28"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconCheckboxCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 16" fill="none">
    <path
      d="M19.7071 0.94916C19.3166 0.558613 18.6835 0.558613 18.2929 0.94916L6.31229 12.9299L1.70713 8.32475C1.31662 7.9342 0.683496 7.93424 0.29291 8.32475C-0.0976367 8.71525 -0.0976367 9.34838 0.29291 9.73893L5.60518 15.0511C5.99557 15.4416 6.62916 15.4413 7.01939 15.0511L19.7071 2.36338C20.0977 1.97287 20.0976 1.33971 19.7071 0.94916Z"
      fill="white"
    />
  </svg>
);

export const IconNavDropdown = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
    <path
      d="M6 6.00019L0 0.00018646H2.99993L6 3.00019L8.99993 0L12 0.00018646L6 6.00019Z"
      fill={color ?? '#F2F2F2'}
    />
  </svg>
);
