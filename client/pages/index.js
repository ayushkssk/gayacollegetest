import Head from 'next/head';
import NoticeBoard from '../components/NoticeBoard';

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Gayacollegegaya</h1>
                    <nav>
                        <Link href="/admissions"><a className="text-gray-600 hover:text-gray-800 mx-2">Admissions</a></Link>
                        <Link href="/campus-tours"><a className="text-gray-600 hover:text-gray-800 mx-2">Campus Tours</a></Link>
                        <Link href="/contact"><a className="text-gray-600 hover:text-gray-800 mx-2">Contact</a></Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Gayacollegegaya</h2>
                    <p className="text-lg text-gray-600 mb-8">Empowering students to achieve their dreams through quality education and vibrant campus life.</p>
                    <Link href="/apply">
                        <a className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition">Apply Now</a>
                    </Link>
                </section>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <Image src="/images/campus.jpg" alt="Campus" width={500} height={300} className="rounded-lg" />
                        <h3 className="text-2xl font-bold text-gray-800 mt-4">Explore Our Campus</h3>
                        <p className="text-gray-600 mt-2">Take a virtual tour of our beautiful campus and discover the facilities we offer.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <Image src="/images/faculty.jpg" alt="Faculty" width={500} height={300} className="rounded-lg" />
                        <h3 className="text-2xl font-bold text-gray-800 mt-4">Meet Our Faculty</h3>
                        <p className="text-gray-600 mt-2">Learn from experienced and dedicated faculty members who are leaders in their fields.</p>
                    </div>
                </section>

                <section className="mt-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h3>
                    <p className="text-gray-600 italic">"Gayacollegegaya has transformed my life. The opportunities and support here are unparalleled." - A. Student</p>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Gayacollegegaya. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
} 