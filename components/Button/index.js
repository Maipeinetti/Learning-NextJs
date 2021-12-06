import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          border: 0;
          background: ${colors.black};
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          border-radius: 9999px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button > :global(svg) {
          margin-right: 12px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
