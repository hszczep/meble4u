import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-12">
      <h1 className="text-3xl font-bold mb-6">Regulamin sklepu internetowego Meble4u</h1>

      <ScrollArea className="h-[calc(100vh-126px)] pr-4">
        <div className="space-y-6 text-sm leading-7 text-gray-700">
          <section>
            <h2 className="font-semibold">&sect;1. Postanowienia ogólne</h2>
            <p>
              Sklep internetowy Meble4u (dalej „Sklep”) prowadzony jest przez [Twoja Firma], z siedzibą w [adres firmy], NIP: [numer], REGON: [numer].
              Niniejszy Regulamin określa zasady korzystania ze Sklepu, składania zamówień, płatności, dostawy, odstąpienia od umowy i reklamacji.
              Kontakt: kontakt@meble4u.pl, tel. +48 123 456 789.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;2. Składanie zamówień</h2>
            <p>
              Zamówienia można składać przez 24/7 przez stronę www.meble4u.pl. Wymagana jest akceptacja Regulaminu oraz podanie danych.
              Zawarcie umowy następuje po potwierdzeniu zamówienia przez Sklep.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;3. Ceny i płatności</h2>
            <ul className="list-disc pl-5">
              <li>Ceny są brutto (z VAT).</li>
              <li>Formy płatności: przelew, online (Blik, Przelewy24), za pobraniem.</li>
              <li>Płatność w ciągu 3 dni od zamówienia, inaczej anulacja.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;4. Dostawa</h2>
            <ul className="list-disc pl-5">
              <li>Realizacja zamówień tylko na terenie Polski.</li>
              <li>Koszty i czas dostawy widoczne przy zamówieniu.</li>
              <li>Dostawa firmami kurierskimi lub transportem własnym.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;5. Odstąpienie od umowy</h2>
            <p>
              Konsument ma 14 dni na odstąpienie od umowy bez podania przyczyny. Zwrot towaru na koszt klienta na adres: [adres zwrotu].
              Zwrot pieniędzy do 14 dni po otrzymaniu towaru.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;6. Reklamacje</h2>
            <p>
              Reklamacje należy składać mailowo z opisem i zdjęciami. Odpowiedź w ciągu 14 dni. W przypadku uznania reklamacji: naprawa, wymiana lub zwrot środków.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;7. Dane osobowe (RODO)</h2>
            <p>
              Administratorem danych jest [Twoja Firma]. Dane przetwarzane są w celu realizacji zamówienia, kontaktu, marketingu (za zgodą).
              Klient ma prawo do dostępu, poprawy, usunięcia danych. Szczegóły: <a href="/polityka-prywatnosci" className="underline text-blue-600">Polityka Prywatności</a>.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">&sect;8. Postanowienia końcowe</h2>
            <p>
              Regulamin podlega prawu polskiemu. Sklep zastrzega sobie prawo do zmian regulaminu. Sprawy nieuregulowane: Kodeks cywilny, Ustawa o prawach konsumenta.
            </p>
          </section>

          <p className="text-sm mt-4 text-gray-500">Ostatnia aktualizacja: czerwiec 2025</p>
        </div>
      </ScrollArea>
    </div>
  )
}