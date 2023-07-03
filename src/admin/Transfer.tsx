import * as UI from '@/ui'
import {
  FileText,
  MapVillage,
  RegistrationIn,
  RegistrationOut,
  Street,
  TwoFile,
} from '@/ui'

export default () => {
  return (
    <>
      <UI.Title>Гостиница Татарстан</UI.Title>
      <UI.Description>
        Вход в Деревню Универсиады осуществляется через КПП14 (Деревня
        универсиады д. 35) (круглосуточно) на основании списков по документу,
        удостоверяющему личность (паспорт/свидетельство о рождении)
      </UI.Description>
      <RegistrationIn>с 12 до 23:30</RegistrationIn>
      <RegistrationOut>до 12:00</RegistrationOut>
      <Street>Казань, ул. Пушкина, д. 4</Street>
      <TwoFile>
        <FileText href={'/какая то ссылка.pdf'}>
          Правила проживания в Деревне Универсиады
        </FileText>
        <FileText href={'/какая то ссылка.pdf'}>
          Памятка о правилах пожарной безопасности для гостей комплекса Деревня
          Универсиады
        </FileText>
      </TwoFile>
      <MapVillage />
    </>
  )
}
