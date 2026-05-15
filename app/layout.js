export const metadata = {
  title: "ValleyHome Architect",
  description: "Luxury Architecture and Interior Design in Assam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}