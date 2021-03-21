import Link from 'next/link';
const Navbar = (props) => {  
  return (
    <>      
      <nav className="relative select-none bg-red-500 lg:flex lg:items-stretch w-full">
        <div className="container mx-auto flex">
          <div className="flex flex-no-shrink items-stretch h-12">
            <Link href="/">
              <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Mini Commerce</a>
            </Link>
            <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Jadi Penjual</a>
            
          </div>
          <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Login</a>            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;