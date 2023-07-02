import * as UI from '@/ui'
import {Contacts, FileText, MapVillage, RegistrationIn, RegistrationOut, Street, TwoFile} from "@/ui";

export default () => {
  return (
    <>
      <UI.Description>
        Напоминаем спортсменам,
        включённым в пулы тестирования о необходимости своевременно предоставлять
        и обновлять информацию о нахождении в системе АДАМС, во избежании возможного нарушения антидопинговых правил.
      </UI.Description>
      <UI.Title>Информация для спортсменов</UI.Title>
      <TwoFile>
        <FileText href={'/какая то ссылка.pdf'}>Медицинские противопоказания
          у учебно-тренировочному процессу и участию в спортивных соревнованиях
        </FileText>
      </TwoFile>
      <UI.Title>Контакты</UI.Title>
      <Contacts>+7 (987) 654-32-10</Contacts>
      <Contacts>+7 (987) 654-32-10</Contacts>
    </>
  );
};
