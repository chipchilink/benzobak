import * as UI from '@/ui'

export default (
  <>
    <UI.Title>Гостиница Татарстан</UI.Title>
    <UI.Description>
      Вход в Деревню Универсиады осуществляется через КПП14 (Деревня универсиады
      д. 35) (круглосуточно) на основании списков по документу, удостоверяющему
      личность (паспорт/свидетельство о рождении)
    </UI.Description>
    <UI.RegistrationIn>с 12 до 23:30</UI.RegistrationIn>
    <UI.RegistrationOut>до 12:00</UI.RegistrationOut>
    <UI.Street>Казань, ул. Пушкина, д. 4</UI.Street>
    <UI.TwoFile>
      <UI.FileText href={'/какая то ссылка.pdf'}>
        Правила проживания в Деревне Универсиады
      </UI.FileText>
      <UI.FileText href={'/какая то ссылка.pdf'}>
        Памятка о правилах пожарной безопасности для гостей комплекса Деревня
        Универсиады
      </UI.FileText>
    </UI.TwoFile>
    <UI.MapVillage />
  </>
)
