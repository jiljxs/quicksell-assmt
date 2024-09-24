import React from "react";

import { MoreHorizontal } from "react-feather";

import "./Board.css";
function Board() {
    return (
        <div className="board">
            <div className="board_top">
                <p className="baard_top_title">
                    To Do <span> 2</span>
                </p>
                <MoreHorizontal />
            </div>
            <div className="board_cards">
                <h1>card1</h1>
                <h1>card2</h1>

            </div>

        </div>
    );
}

export default Board;