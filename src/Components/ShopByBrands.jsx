import React from 'react'
import useHorizontalScroll from '../store/useHorizontalScroll ';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function ShopByBrands() {

    const {
        isAtStart,
        isAtEnd,
        scrollRef,
        handleScroll,
        scrollLeftFunc,
        scrollRightFunc,
      } = useHorizontalScroll(1000);

    const imageUris = [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMr3QxpChyHETxt72B8coPLqqaJOVwUssl_9r7B_p4EBRZEVhkF7n1HvdjKeMBJtanGMaKkMg8-AIFK66Fy5bs98EsMyCh8HedrC1609sjkoZ5JvDuR-h6DJttqqsaLJ7DZwRX9ik1K35SralILWiAemXrBhyphenhyphenmOTvawbiZUq4bHQhVOFlaQtKBJ4nBlBE/s320/optimum_nutrition.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_u7cWhWhdolxllBi-djfe1BM0h7dcRHqDB3u1I8ao9RdfU-6kIh01D0urwOWpIxB6pidE3vO2xAwqzpCJ_mhRIc4xjvGVk5k7uLkCsbtSHJ5rbm-5FQt5nucPREIedb92n4PsdoOLJ45wqeo53lSEfFRLXdSnB2KXrUuvBdlUWnrZjeYMEukNxt2aBPY/s320/mb.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgREr-zr5k74fAUc0zMTldhBQhV8Jxw3KZ6MhT6PM63Jh5c150r5bhu-TLwsU88Z43qzzm60ocOgOA5lf_C-UYqlAKyo5UEuDQYWzZsGcJYSktEmE0EUy48NlLdjEtO73G9Bx6_ipmWn4URlZWIANMN9fwOwthfF3cqeJy9nofoIdeMElUNIG9ektL6kH8/s1600/isopure.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKRDcEBoEZz-uHhOh3ydr24WqqX3prxQMIH0JePdgGqYvtPMc1YnzhaKpc_gm0kKos_82t2yy7O_c_VuVwqbcsvzRhvzdOzHecAREcrMO42cLxKjtyXHZCOJleSrO5QpK9MUeX8v3VVNGzX-KV7lcNug-KSTskGqKZCzCFbG7EliQJwIKlehyphenhyphencTjUQBco/s1600/gnc.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWzhO-EzegQoCSsk8l8e4jFsrFQbWbQuMV1Xl0xLrDzrKt14djkgfKrtAAgbeilgwLfBq7HVcEqhZliTIoIZ5Xuc4T49YashG9kc0YWL41Z0cQ7UD1rqITk6zR2Fn5bF7wKxE1XuowE2E5N8RYLIStu5MnXn7Pj1MlMMkYkmchzkA8u70Msku9iWM2RuA/s1600/big-muscle.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGXdmEvbOwcd3gaHtjSmfrKQULEA2cxDDgxspvJPn4EQMjoF8TGJ9XnDn_UHJPMdcw-bvPE3TkCTySxifhf68YSIsmHXw5fi7e2J3mnplKJ9vnsMLo_gZvWlYg-JMSK6qonOJoDbZ2ZXjzSTnSa5-wCSsR_Wdkf9EwMEBrqPTV3XuroqV-XLI_By0ZVFI/s320/avvatar.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn4GgNmdYuUBBLFXE527COk0vN2hARLyQ_B0Z14jL43NlJXbwlMm167uaLd7lfN8IacGPWPUmW3aJqsGk4iOxncxMKG6ik-41E8oAq-XPFLemGKSbw2dVFu2J1nYyYvERMvZrgD4oubhWt6GMZj3GuhT921aT3SL7fWVTQeuDA7RAo_j_KXt_vtIwcjjA/s320/as-it-is.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA3Q8v0rZgVaPlIJgEtd8wbC0BdtKbnkQfksLhE8saIv8CS__Zuz0Y3lLCm7UWPgU-YvyPa3rXcX5wOTHULoF0x6aQoNAevOOdeY4qIkHLg2IdD1CCp5HxetsrSgMql7HYENBFxtOr9STSHWVfi-HqYeV-hbCV_XvDh9aQCsEYhNodAmlVmaKRj9lacYg/s1600/dymnatize.png',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA5XZNgGaDPJpaKd6jg52qgm_SJMbfeU8dqPgRQrYuXYDOQmUmyo8kmDFe8g3b4NnU2MopWTWIJ0NjRfWs9eqQ1TUJEnygYtySJKnKRrwqthHV4VSGpavwK2ytODrZB6cTXgv6rSdMC4qbvmwl3fC4hoykpQ_i6JAkjNFkvmyP_rh1hkqnqi3dcIG3QNY/s1600/Muscletech.png'
    ]
    return (
        <div className='section-container md:relative py-8'>
          <h1 className='section-heading'>SHOP BY BRANDS</h1>
    
          {!isAtEnd && (
            <div
              onClick={scrollRightFunc}
              className='hidden md:block absolute right-1 px-2 py-6 bg-white hover:bg-gray-100 shadow-2xl text-customBlack border top-[75px] cursor-pointer'
            >
              <FaChevronRight className="text-3xl" />
            </div>
          )}
    
          {!isAtStart && (
            <div
              onClick={scrollLeftFunc}
              className='hidden md:block absolute left-2 px-2 py-6 bg-white hover:bg-gray-100 shadow-2xl text-customBlack border top-[75px] cursor-pointer'
            >
              <FaChevronLeft className="text-3xl" />
            </div>
          )}
    
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className='mt-3 flex overflow-x-auto w-full gap-5 scroll-smooth hide-scrollbar cursor-pointer'
          >
            {imageUris.map((image, index) => (
              <img
                src={image}
                className=' w-[20vw] rounded-lg max-w-[180px] h-auto custom-border shadow-2xl object-contain'
                key={index}
                alt={`Brand ${index}`}
              />
            ))}
          </div>
        </div>
      );
    }
    
    export default ShopByBrands;