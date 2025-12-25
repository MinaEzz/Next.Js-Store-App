export default function About() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h1 className="text-4xl sm:text-6xl leading-none tracking-wide font-bold flex items-center justify-center flex-wrap gap-2 sm:gap-x-6 text-center">
        We love{" "}
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          Store
        </span>
      </h1>
      <p className="max-w-2xl text-lg tracking-wide leading-8 text-muted-foreground mx-auto text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        sapiente laborum tempora! Placeat neque laudantium sit reprehenderit
        tenetur at consequatur corrupti ab error quisquam, similique veritatis
        maiores alias! Inventore voluptatum labore magni quisquam? Vitae quasi
        voluptates veritatis quidem a enim.
      </p>
    </section>
  );
}
