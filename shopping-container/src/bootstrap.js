export const prms = Promise.all([
  import('cart/CartIndex'), 
  import('products/ProductIndex')
]).then(([module1, module2, module3]) => {
  return [module1, module2];
  // use the loaded modules here
}).catch((error) => {
  // handle any errors that occurred during module loading
});

export default prms;
console.log('val', val);
