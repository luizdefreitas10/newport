export default function ClassPerson() {
  return (
    // bg-gray-900 && text-gray-300
    <div className="w-full md:w-auto flex justify-center items-center">
      <div className="w-[400px] sm:w-auto bg-white p-4 rounded-lg shadow-lg z-10 overflow-hidden sm:ml-[-20px] md:ml-0">
        <pre className="font-mono text-[12px] sm:text-sm text-[#778bf2]">
          <code className="h-auto">
            {`class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      greet() {
        return "Hello World!";
      }
    }
    
    const person = new Person('Luiz', 30);
    console.log(person.greet());`}
          </code>
        </pre>
      </div>
    </div>
  );
}
// #778bf2
