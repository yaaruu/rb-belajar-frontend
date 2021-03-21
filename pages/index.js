import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1>List Produk</h1>
        <div className="w-full flex grid grid-cols-8">
          {[1,2,3,4,5,6,7,8].map((e,i) => (
            <Link href="/product">
              <div className="mr-2 text-center">
                <img className="w-full" src="https://placehold.it/150x150"/>
                <p>Nama Produk</p>                              
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1>Produk Unggulan</h1>
        <div className="w-full flex grid grid-cols-8">
          {[1,2,3,4,5,6,7,8].map((e,i) => (
            <Link href="/product">
              <div className="mr-2 text-center">
                <img className="w-full" src="https://placehold.it/150x150"/>
                <p>Nama Produk</p>                              
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>    
  );
}
