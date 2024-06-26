import Image from "next/image";
import Link from "next/link";
import Author from "./__child/author";

export default function Section1() {
  const bg = {
    background: "url('images/banner.png') no-repeat",
    backgroundPosition: "right"
  }
  return (
    <>
      <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
          {Slide()}
        </div>
      </section>
    </>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travels
            </a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">
              - July 3,2024
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} legacyBehavior><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">
            Your most unhappy customers are your greatest source of learning
            </a></Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the 
        </p>
        <Author />
      </div>
    </div>
  );
}