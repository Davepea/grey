import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className=" max-w-[1500px] m-auto">
       <section className="  py-4 px-10 font-medium ">
           <div className="bg-[#ffffff] grid grid-cols-12 md:h-[50vh]">
           <div className=" col-span-9 py-4 px-10 flex flex-col justify-between ">
              <h1 className=" text-[60px] leading-[1.3] font-Medium_Grotesk">SnapBack Caps are Back with a new look! </h1>
              <div>
              <button className=" underline">
                EXPLORE THE BLOCK
              </button>
              </div>
            </div>
            <div className=" col-span-3 grid overflow-hidden grid-rows-5">
              <div className="bg-[#010101] text-white row-span-2 py-10 px-6">
                <p>Why champion Afro Music With Our New Banana Tees</p>
              </div>
              <div className=" overflow-hidden row-span-2">
                <div className=" overflow-hidden ">
                <Image
                className="object-center"
                  src="https://img.freepik.com/free-photo/medium-shot-man-posing_23-2149028762.jpg?t=st=1724242025~exp=1724245625~hmac=c21c806b4bc53ab2723a9ed47c39dc94bcc2f1ab72fb29f442503a9d0247e906&w=996"
                  height={1000}
                width={1000}
                alt="prod"
                />
                </div>
              </div>
              <div className="bg-[#2BB1E3] flex items-center px-6 text-white">
                  <p>CONTINUE READING</p>
              </div>
            </div>
           </div>
           <div className=" relative py-10">
            <div className=" absolute z-[-1] text-white top-0 left-0 bottom-0 right-0 flex justify-center pt-28">
              <h1 className=" text-[10vw] font-Light_Grotesk">LATEST COLLECTION</h1>
            </div>
             <div className=" z-20 p-0  top-0 left-0 right-0 bottom-0 w-[1000px] m-auto  rotate-12">
               <Image
               src='/images/newcap.png'
               alt="cap"
               width={1000}
               height={500}
               />
             </div>
             <div className=" absolute bottom-[35%] flex justify-center right-0 left-0">
               <div className="w-[80px] h-[80px] bg-[#E33340] rounded-full grid place-content-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>

               </div>
             </div>
           </div>
       </section>
       <section className=" py-10 px-10 text-white text-transform">
        <div className=" grid grid-cols-12  gap-1 gap-y-10">
        
          <div className=" col-span-3   ">
            <div className="h-[350px] overflow-hidden relative group">
            <div className=" overflow-hidden ">
            <Image
                src="https://i.pinimg.com/474x/02/9b/99/029b99ef6dfb6553a28f2f01cb059408.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           <div className="bg-[#2BB1E3] absolute top-3 right-3 py-2 px-3">
               <p className=" text-[15px] font-Medium_Grotesk">NEW </p>
               
                
          
            </div>
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
           
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          
          <div className=" col-span-3  overflow-hidden ">
            <div className="h-[350px] relative group overflow-hidden">
            <div className=" overflow-hidden ">
            <Image
          
                src="https://i.pinimg.com/564x/47/10/ed/4710ed11de11aae995f7db9562f44d50.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           <div className="bg-[#2BB1E3] absolute top-3 right-3 py-2 px-3">
               <p className=" text-[15px] font-Medium_Grotesk">NEW </p>
               
                
          
            </div>
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
           
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          <div className=" col-span-3  overflow-hidden ">
            <div className="h-[350px] group relative overflow-hidden">
            <div className=" overflow-hidden">
            <Image
                src="https://i.pinimg.com/474x/43/40/45/43404580a6f19f5607c7cd52ca22eccd.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
            <div className="bg-[#2BB1E3] absolute top-3 right-3 py-2 px-3">
               <p className=" text-[15px] font-Medium_Grotesk">NEW </p>
               
                
          
            </div>
            <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
            
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          <div className=" col-span-3  overflow-hidden ">
            <div className="h-[350px] group relative overflow-hidden">
            <div className=" overflow-hidden">
            <Image
                src="https://i.pinimg.com/736x/6e/3f/a8/6e3fa8720f1f8476c39ed97d59bd3f92.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           <div className="bg-[#2BB1E3] absolute top-3 right-3 py-2 px-3">
               <p className=" text-[15px] font-Medium_Grotesk">NEW </p>
               
                
          
            </div>
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
            
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          
        </div>
       </section>
       <section className="py-10 px-10 ">
        <div className="text-center">
          <h1 className=" text-[50px] max-w-[900px] m-auto font-Regular_Grotesk leading-[1.2] py-10 text-white">THE PERFECT -BLEND OF HIGH FASHION 
          AND STREET WEAR FOR YOU.</h1>
        </div>
        <div className="grid grid-cols-12 gap-4 h-[550px]">
          <div className=" col-span-6 bg-[url('https://i.pinimg.com/474x/ce/f9/fd/cef9fd633d81fdc30e4f87a2f61c27d5.jpg')]"></div>
          <div className=" col-span-6 bg-[url('https://i.pinimg.com/474x/ca/58/41/ca5841d5c64f71169ec408d8e641347a.jpg')] bg-cover bg-no-repeat"></div>
        </div>

       </section>
       <section className=" py-10 px-10 text-white text-transform">
        <h1 className=" font-Regular_Grotesk text-[50px] py-10 text-center">EXPERIENCING YOUR LIMITS YET?</h1>
        <div className=" grid grid-cols-12  gap-1 gap-y-10">
          <div className=" col-span-4   ">
            <div className="h-[400px] overflow-hidden relative group">
            <div className=" overflow-hidden ">
            <Image
                src="https://i.pinimg.com/474x/02/9b/99/029b99ef6dfb6553a28f2f01cb059408.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
           
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          
          <div className=" col-span-4  overflow-hidden ">
            <div className="h-[400px] relative group overflow-hidden">
            <div className=" overflow-hidden ">
            <Image
          
                src="https://i.pinimg.com/564x/47/10/ed/4710ed11de11aae995f7db9562f44d50.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
           
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
          <div className=" col-span-4  overflow-hidden ">
            <div className="h-[400px] group relative overflow-hidden">
            <div className=" overflow-hidden">
            <Image
                src="https://i.pinimg.com/564x/39/2b/b5/392bb544dce068cc725c91ef8197a6bd.jpg"
                height={1000}
                width={1000}
                alt="prod"
              />
            </div>
           
             <div className=" absolute bottom-[-50px] top-[100%] left-0 right-0 group-hover:top-0 transition-all duration-75 grid place-content-center bg-[#02020211]  "> 
              <button className="bg-[#fff] w-full h-[50px] text-[20px] font-Medium_Grotesk px-8 text-black">
                add to cart
              </button>
            </div>
            </div>
            
            <div>
              <p className=" text-[18px]">Oversize LE Shirt</p>
              <p>$300</p>
            </div>
          </div>
        
        </div>
       </section>
       <section className="py-20 text-white px-10">
        <div className="h-screen  p-10 bg-[#E33340] overflow-hidden relative ">
          <div className=" flex justify-center absolute top-[-50px] right-0 left-0 bottom-[-50px] z-[1]">
            <div className="">
            <Image
              className=" h-full w-full"
                src='/images/greyim@2x.png'
                alt="imhg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className=" z-20 relative flex flex-col items-center font-Medium_Grotesk">
            <h1 className=" text-[27vw] font-Semibold_Grotesk">GREY</h1>
            <div className="flex justify-between w-full items-center">
              <p>THE PERFECT BLEND OF HIGH FASHION </p>
              <button className=" bg-white w-[300px] rounded-[30px] py-2 text-black text-[30px]">Shop GRAY.</button>
              <p>
 
                AND STREET-WEAR FOR YOU.
              </p>
            </div>
          </div>
        </div>
       </section>
      
    </section>

    </>
  );
}
