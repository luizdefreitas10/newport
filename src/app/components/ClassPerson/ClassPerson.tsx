export default function ClassPerson() {
  return (
    <div className="w-screen md:w-auto flex justify-center">
      <div className="w-[400px] md:w-auto bg-gray-900 p-4 rounded-lg shadow-lg z-10 overflow-hidden ml-[-20px] md:ml-0">
        <pre className="font-mono text-sm text-gray-300">
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
