export function add(a, b) {
  return a + b;
}

export function isEven(num) {
  return num % 2 === 0;
}

export default function MathMessage({ number }) {
  return (
    <div>
      {isEven(number)
        ? `${number} is even`
        : `${number} is odd`}
    </div>
  );
}
