// app/layout.js
import './globals.css'

export const metadata = {
  title: "My App",
  description: "Next.js 16 App Router Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", background: "#f5f5f5" }}>
          <h1>My Website</h1>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer style={{ padding: "20px", background: "#f5f5f5" }}>
          <p>© 2026 My App</p>
        </footer>
      </body>
    </html>
  );
}