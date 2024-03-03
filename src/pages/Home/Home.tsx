import React from "react";
import { Hero } from "../../components/Hero/hero.tsx";
import "./home.scss";

export const Home = () => {

    const [curX, setCurX] = React.useState(0);
    const [curY, setCurY] = React.useState(0);
    const [tgX, setTgX] = React.useState(0);
    const [tgY, setTgY] = React.useState(0);
  
    const handleMouseMove = React.useCallback((event: MouseEvent) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    }, []);
  
    React.useEffect(() => {
      const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
  
      function move() {
        setCurX((prevCurX) => curX + (tgX - curX) / 20);
        setCurY((prevCurY) => curY + (tgY - curY) / 20);
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      }
  
      window.addEventListener('mousemove', handleMouseMove);
  
      move();
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [handleMouseMove, tgX, tgY]);

        return (
            <div id="home">
                <div className="text-container">
                    <Hero />
                </div>
                <div className="gradient-bg">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="interactive"></div>
                    </div>
                </div>
            </div>
        )
    }