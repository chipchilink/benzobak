import * as NavBar from '@/app/components/NavBar';

export default (p: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar.Container>
                <NavBar.Item href="/residence">Проживание</NavBar.Item>
                <NavBar.Item href="/food">Питание</NavBar.Item>
                <NavBar.Item href="/transfer">Трансфер</NavBar.Item>
            </NavBar.Container>
            {p.children}
        </>
    );
};