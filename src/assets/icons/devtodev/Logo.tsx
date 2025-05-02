const Logo = () => {
  return (
    <svg
      width="165"
      height="60"
      viewBox="0 0 165 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <style>
        {`
            .text {
              font-family: 'Segoe UI', sans-serif;
              font-size: 24px;
              fill: #835afd;
              font-weight: bold;
            }
            .icon {
              font-family: monospace;
              font-size: 28px;
              fill: #835afd;
            }
          `}
      </style>
      <text x="0" y="40" className="icon">
        &lt;
      </text>
      <text x="20" y="40" className="text">
        Dev to Dev
      </text>
      <text x="150" y="40" className="icon">
        &gt;
      </text>
    </svg>
  );
};

export default Logo;
