import './globals.css';

export const metadata = {
  title: 'Tuungane Kenya - Find Your Match Nearby',
  description: 'Location-based dating for people in Kenya. Connect in Nairobi, Mombasa, Kisumu and beyond.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <h1 className="logo">Tuungane 🇰🇪</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/discover">Discover</a>
              <a href="/profile">Profile</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2026 Tuungane Kenya. Location-based matchmaking for Kenyans.</p>
        </footer>
      </body>
    </html>
  );
}
