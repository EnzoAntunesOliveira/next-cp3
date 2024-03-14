import CardFilm from "../components/CardFilm";
import React from "react";


export default function Home() {
  return (
    <main className="main">
      <CardFilm
        title="Hobbit: Uma jornada inesperada"
        image="Hobbit.jpg"
        link="https://youtu.be/4AKkpnCKa2I?si=_ntAoMrR7C4-I1j2"

      />
       <CardFilm
        title="Hobbit: A desolação de Smaug"
        image="smaug.jpg"
        link="https://youtu.be/VWKYlN-fAWM?si=TnAvNl6Aq6gCJpqf"
      />
       <CardFilm
        title="Hobbit: A batalha dos cinco exércitos"
        image="batalha.jpg"
        link="https://youtu.be/VKkFW5TTB6g?si=Vr1ic9_087LiItJg"
      />
       <CardFilm
        title="Poderoso chefão"
        image="chefe.jpg"
        link="https://youtu.be/SaHZHU-44XA?si=YcJzbV2cVgXD27qC"
      />
       <CardFilm
        title="Poderoso chefão 2"
        image="chefe2.jpg"
        link="https://youtu.be/FLbWXkka9wU?si=PeOGVEX6z3awBI7n"
      />
       <CardFilm
        title="Poderoso chefão 3"
        image="chefe3.jpg"
        link="https://youtu.be/uODu_Ffcy3s?si=GndFAr102kDmtBVC"
      />
       <CardFilm
        title="O senhor dos anéis: A sociedade "
        image="anel.jpg"
        link="https://youtu.be/0i86oM1nHjM?si=k3Vlvj_MlRjohelc"
      />
       <CardFilm
        title="O senhor dos anéis: As duas torres"
        image="anel2.jpg"
        link="https://youtu.be/Al5iC4CnhYc?si=NWMYfH9w2Ww8-F5u"
      />
       <CardFilm
        title="O senhor dos anéis: O retorno do rei"
        image="anel3.jpg"
        link="https://youtu.be/LiKeQrChkTY?si=FQdKbHIURARXiP5j"
      />
       <CardFilm
        title="O menino e a garça"
        image="garca.jpg"
        link="https://youtu.be/hCg9h3ILzJ4?si=M-DHGDEEhrtL6NQa"
      />
      
    </main>
  );
}
