import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// describe('My Test Suite',()=>{

// test('Test Case-1',()=>{
// render(<App/>);
// //var text1=screen.getByText('welcome to JEST');
// //expect(text1).toBeInTheDocument();

// var element1=screen.getByTestId("MyHeading");
// //expect(element1).toBeInTheDocument(); //its not mandatory
// expect(element1).toHaveTextContent('welcome to JEST') ;
// //expect(element1).toBe('welcome to JEST')
// });

// xit('Tset Case-2',()=>{
// render(<App/>);
// var text2=screen.getByText('Hello world');
// expect(text2).toBeInTheDocument();
// });

// });


describe('My calculator Test Suite' ,()=>{
  test('Test Case-1',()=>{
  render(<App/>);

  const textbox1=screen.getByTestId('TextBox1');
  const textbox2=screen.getByTestId('TextBox2');
  const textbox3=screen.getByTestId('TextBox3');

  expect(textbox1).toBeInTheDocument();
  expect(textbox2).toBeInTheDocument();
  expect(textbox3).toBeInTheDocument();
  });

  test('Test case-2[Render all labels and text messages]',()=>{
    render(<App/>);
    const heading=screen.getByTestId("Heading");
    const label1=screen.getByTestId("Label1");
    const label2=screen.getByTestId("Label2");
    const result=screen.getByTestId("Result");

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Addition of two Numbers");

  expect(label1).toBeInTheDocument();
  expect(label1).toHaveTextContent("Enter NO 1");

  expect(label2).toBeInTheDocument();
  expect(label2).toHaveTextContent("Enter NO 2");

  expect(result).toBeInTheDocument();
  expect(result).toHaveTextContent("Sum :");

  });

test('Test Case-3[Testing TextBoxes initial value]',()=>{
  render(<App/>);
  const textbox1=screen.getByTestId("TextBox1");
  const textbox2=screen.getByTestId("TextBox2");
  expect(textbox1).toHaveTextContent('');
  expect(textbox2).toHaveTextContent('');
});

test('Test Case-4[Testing empty or blank]',()=>{
  render(<App/>);
  const textbox3=screen.getByTestId("TextBox3");
 fireEvent.click(textbox3);

 const result=screen.getByTestId("Result");
 expect(result).toHaveTextContent("Sum : NaN");

});

test('Test Case-5[Testing success result]',()=>{
  render(<App/>);
  const textbox1=screen.getByTestId("TextBox1");
  const textbox2=screen.getByTestId("TextBox2");
  const textbox3=screen.getByTestId("TextBox3");
  fireEvent.change(textbox1,{target : {value : 10}});
  fireEvent.change(textbox2,{target : {value : 20}});
 
  fireEvent.click(textbox3);
 const result=screen.getByTestId("Result");
 expect(result).toHaveTextContent("Sum : 30");

});



});




