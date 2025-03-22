import Nav from "../organisms/Nav";
import NotesPage from "../organisms/Note";

export default function Notes() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/Background.svg')" }}>
          <Nav/>
          <NotesPage/>
        </div>
  )
}
