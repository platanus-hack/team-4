"use client";
//
import Image from "next/image";
import { Button } from '@nextui-org/button'; 
//
import avatar from "../assets/avatar.png";
import layout from "./page.module.scss";

const CardsPage = () => {
  return (
    <main className={layout.main}>
      <section className={layout.wrapper}>
        <div className={layout.card}>
          <div>
            <Image src={avatar} alt="avatar" height={65} width={60} />
            <p>William</p>
          </div>
          <h1>
            ¿Está experimentando dificultad para respirar?
          </h1>
          <div>
            <Button size="lg">
              Sí
            </Button>
            <Button size="lg">
              No
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CardsPage;