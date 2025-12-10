import Link from "next/link";
import "@/styles/app.css";
import Footer from '@/components/Footer';
import logo from '@/content/img/studio bouwhaven.png';
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='nav-container'>
          <nav>
            <Link className='nav-logo' href='/'>
              <Image
                src={logo}
                alt='Studio Bouwhaven total engineering logo'
                fill
              />
            </Link>
            <div>
              <Link href='/contact'>{'Contact'}</Link>
            </div>
          </nav>
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}