// import { flush, render } from '@stencil/core/testing';
// import { StButton } from './st-button';

// describe('st-button', () => {
//   it('should build', () => {
//     expect(new StButton()).toBeTruthy();
//   });

//   describe('rendering', () => {
//     let element;
//     beforeEach(async () => {
//       element = await render({
//         components: [StButton],
//         html: '<st-button></st-button>'
//       });
//     });

//     it('should work without parameters', () => {
//       expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
//     });

//     it('should work with a first name', async () => {
//       element.first = 'Peter';
//       await flush(element);
//       expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
//     });

//     it('should work with a last name', async () => {
//       element.last = 'Parker';
//       await flush(element);
//       expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
//     });

//     it('should work with both a first and a last name', async () => {
//       element.first = 'Peter'
//       element.last = 'Parker';
//       await flush(element);
//       expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
//     });
//   });
// });