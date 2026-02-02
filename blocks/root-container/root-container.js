// export default function decorate(block){
//     const buttonLinks = block.querySelectorAll('p > a');

//     if(buttonLinks.length>0){
//         const buttonWrapper = document.createElement('div');
//         buttonWrapper.className='button-wrapper';

//         buttonLinks.forEach(link => {
//             link.classList.add('button');

//             buttonWrapper.appendChild(link);

//             link.parentElement?.remove();

//         });

//         block.appendChild(buttonWrapper);
//     }
// }