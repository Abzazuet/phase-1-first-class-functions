const spy = () => "callback function";
const receivesAFunction = callback => "Called a  "+callback();
const returnsANamedFunction = () =>spy;
const returnsAnAnonymousFunction = () => function () {
    console.log("This is an anonymus function");
}