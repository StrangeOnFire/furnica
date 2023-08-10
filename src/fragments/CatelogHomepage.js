import React,{useEffect} from 'react';
import TopNavigation from './TopNavigation';
import ItemCards from './ItemCards';
import PopularAcrossSite from './PopularAcrossSite';


export default function CatelogHomepage({pageHeading,productsArray,ToFirstLInk,ToSecondLink,ToThirdLink}) {
  useEffect(()=>{
    document.body.style.paddingBottom = 0
  },[])
  return (
    <>
      <TopNavigation firstLink={ToFirstLInk} secondLink={ToSecondLink} thirdLink={ToThirdLink}  activePage={pageHeading}/>
        <h1 className='page-heading-h1'>{pageHeading}</h1>
        <div className='product-section-catelog'>
        {productsArray.map((element) => (
                    <ItemCards key={element.path} path={element.path} img={element.img} heading={element.heading} mrp={element.mrp} costPrice={element.cp} off={element.off} />
                ))}
        </div>
        <PopularAcrossSite/>
    </>
  )
}
