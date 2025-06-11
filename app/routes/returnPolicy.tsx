import { Separator } from "~/components/ui/separator";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-12">
      <h1 className="text-3xl font-bold mb-6">Polityka zwrotów</h1>

      <ScrollArea className="h-[calc(100vh-126px)] pr-4">
        <div className="space-y-6 text-sm leading-7 text-gray-700">
          <section>
            <h2 className="font-semibold">1. Prawo odstąpienia od umowy</h2>
            <p>
              Zgodnie z ustawą z dnia 30 maja 2014 r. o prawach konsumenta, Klient
              ma prawo odstąpić od umowy zawartej na odległość w terminie 14 dni
              kalendarzowych bez podania przyczyny.
            </p>
            <p>
              Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia, w
              którym Klient otrzymał rzecz (lub osoba trzecia wskazana przez Klienta).
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">2. Jak dokonać zwrotu?</h2>
            <ul className="list-disc pl-5">
              <li>Wyślij e-mail na adres: kontakt@meble4u.pl z informacją o odstąpieniu od umowy.</li>
              <li>Do wiadomości dołącz numer zamówienia oraz dane kontaktowe.</li>
              <li>Odeślij towar na adres: [adres do zwrotów] w ciągu 14 dni od zgłoszenia.</li>
              <li>Produkt nie może nosić śladów użytkowania i musi być w oryginalnym opakowaniu.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">3. Zwrot pieniędzy</h2>
            <p>
              Po otrzymaniu i sprawdzeniu zwracanego towaru, zwracamy należność w
              terminie do 14 dni roboczych na wskazany rachunek bankowy.
            </p>
            <p>
              Zwrot obejmuje również koszty najtańszej oferowanej dostawy, ale nie
              obejmuje kosztów zwrotu towaru.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="font-semibold">4. Brak możliwości odstąpienia od umowy</h2>
            <p>
              Zwrotowi nie podlegają produkty:
            </p>
            <ul className="list-disc pl-5">
              <li>wyprodukowane na indywidualne zamówienie Klienta,</li>
              <li>uszkodzone z winy Klienta,</li>
              <li>używane w sposób wykraczający poza zwykły obieg testowy.</li>
            </ul>
          </section>

          <Separator />

          <p className="text-sm text-gray-500">Ostatnia aktualizacja: czerwiec 2025</p>
        </div>
      </ScrollArea>
    </div>
  )
}
