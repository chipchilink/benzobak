import Link from 'next/link';
import styled from './styled.module.scss';
import MapVillageImg from './map/mapVillage.jpg'
import Image from 'next/image'

export const Title = (p: { children: string }) => {
    return <h1 className={styled.title}>{p.children}</h1>
};

export const Description = (p: { children: string }) => {
    return <p>{p.children}</p>
};

export const File = (p: { href: string }) => {
    return (
        <Link href={`/${p.href}`} className={styled.file} />
    );
};

export const RegistrationIn = (p: {children: string}) => {
    return (
      <p className={styled.registration_time}>Регистрация заезда:<span style={{marginLeft: '16px'}}>{p.children}</span></p>
    );
};

export const RegistrationOut = (p: {children: string}) => {
    return (
      <p className={styled.registration_time}>Регистрация выезда:<span style={{marginLeft: '11px'}}>{p.children}</span></p>
    );
};

export const Street = (p: {children: string}) => {
    return (
      <Link href={`https://2gis.ru/kazan/search/${p.children}`} className={styled.street}>
          <span className={styled.street_icon}/>
          <span className={styled.street_name}>{p.children}</span>
      </Link>
    )
};

export const FileText = (p: {children: string, href: string}) => {
    return (
      <div className={styled.file_text}>
        <File href={p.href}/>
        <p>{p.children}</p>
      </div>
    )
};

export const TwoFile = (p: {children: any}) => {
  return (
    <div className={styled.two_file}>
      {p.children}
    </div>
  )
}

export const MapVillage = () => {
    return (
      <div className={styled.map_village}>
        <Image src={MapVillageImg} alt="Карта деревни"/>
      </div>
    )
}

export const Contacts = (p: {children: string}) => {
    return (
      <p className={styled.contacts}>{p.children}</p>
    )
}

export const Navigation = (p: {children: string, href: string}) => {
    return (
      <Link className={styled.navigation} href={p.href}>
        <p>{p.children}</p>
        <span className={styled.navigation_icon}/>
      </Link>
    )
}




