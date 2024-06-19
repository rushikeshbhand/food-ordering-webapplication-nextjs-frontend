import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="carousel rounded-box w-full max-w-6xl">
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-item w-full md:w-1/3">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            layout="responsive"
            width={800}
            height={450}
            alt="Sample"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
