import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import useBoard from "../../store/Board";
import "./Board.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import AddCardModal from "../../components/AddCardModal/AddCardModal";

const getGradient = (columnTitle) => {
  if (columnTitle === "TODO") {
    return { background: "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)" };
  } else if (columnTitle === "Doing") {
    return { background: "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)" };
  } else if (columnTitle === "Completed") {
    return { background: "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)" };
  } else if (columnTitle === "Backlog") {
    return { background: "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(134, 48, 220) 163.54%)" };
  }
  return {};
};

const ColumnHeader = ({ column, board, setBoard, dragHandleProps }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleCardAdd = (title, detail) => {
    const newCard = { id: String(new Date().getTime()), title, description: detail };
    const updatedColumns = board.columns.map((col) =>
      col.id === column.id ? { ...col, cards: [...col.cards, newCard] } : col
    );
    setBoard({ ...board, columns: updatedColumns });
    setModalOpened(false);
  };

  return (
    <div className="column-header" {...dragHandleProps}>
      <span>{column.title}</span>
      <IoMdAdd color="white" size={25} title="Add card" onClick={() => setModalOpened(true)} />
      <AddCardModal visible={modalOpened} handleCardAdd={handleCardAdd} onClose={() => setModalOpened(false)} />
    </div>
  );
};

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Se non c'è destinazione, non fare nulla
    if (!destination) return;

    // Se source e destination sono uguali, non fare nulla
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    // Creazione di una copia del board
    const newBoard = { ...board };
    const sourceColumn = newBoard.columns.find(
      (column) => column.id.toString() === source.droppableId
    );
    const destinationColumn = newBoard.columns.find(
      (column) => column.id.toString() === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    // Rimozione della card dalla colonna di origine
    const [movedCard] = sourceColumn.cards.splice(source.index, 1);

    // Aggiunta della card alla colonna di destinazione
    destinationColumn.cards.splice(destination.index, 0, movedCard);

    // Aggiornamento dello stato
    setBoard(newBoard);
  };

  const removeCard = (columnId, cardId) => {
    const updatedColumns = board.columns.map((col) =>
      col.id === columnId ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) } : col
    );
    setBoard({ ...board, columns: updatedColumns });
  };

  return (
    <div className="board-container">
      <span>Trello Board</span>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {board.columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id.toString()}>
              {(provided) => (
                <div
                  className="kanban-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <ColumnHeader
                    column={column}
                    board={board}
                    setBoard={setBoard}
                    dragHandleProps={provided.dragHandleProps}
                  />
                  <div className="kanban-cards">
                    {column.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`kanban-card ${snapshot.isDragging ? 'dragging' : ''}`}
                            style={{
                              ...provided.draggableProps.style,
                              ...getGradient(column.title)
                            }}
                          >
                            <div>
                              <span>{card.title}</span>
                              <button className="remove-button" type="button" onClick={() => removeCard(column.id, card.id)}>
                                <RxCross2 color="white" size={15} />
                              </button>
                            </div>
                            <span>{card.description}</span>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default BoardPage;