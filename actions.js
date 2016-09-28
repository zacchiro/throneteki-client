import $ from 'jquery';

export function navigate(path) {
    return {
        type: 'NAVIGATE',
        newPath: path
    };
}

export function register(username, token) {
    return {
        type: 'AUTH_REGISTER',
        username: username,
        token: token
    };
}

export function login(username, token) {
    return {
        type: 'AUTH_LOGIN',
        username: username,
        token: token
    };
}

export function logout() {
    return {
        type: 'AUTH_LOGOUT'
    };
}

export function requestCards() {
    return {
        type: 'REQUEST_CARDS'
    };
}

export function receiveCards(cards) {
    return {
        type: 'RECEIVE_CARDS',
        cards: cards
    };
}

export function fetchCards() {
    return dispatch => {
        dispatch(requestCards());

        return $.ajax('/api/cards')
            .done(function(data) {
                dispatch(receiveCards(data.cards));
            });
    };
}

export function requestPacks() {
    return {
        type: 'REQUEST_PACKS'
    };
}

export function receivePacks(packs) {
    return {
        type: 'RECEIVE_PACKS',
        packs: packs
    };
}

export function fetchPacks() {
    return dispatch => {
        dispatch(requestPacks());

        return $.ajax('/api/packs')
            .done(function(data) {
                dispatch(receivePacks(data.packs));
            });
    };
}

export function receiveGames(games) {
    return {
        type: 'RECEIVE_GAMES',
        games: games
    };
}

export function startNewGame() {
    return {
        type: 'START_NEWGAME'
    };
}

export function cancelNewGame() {
    return {
        type: 'CANCEL_NEWGAME'
    };
}

export function socketConnected(socket) {
    return {
        type: 'SOCKET_CONNECTED',
        socket: socket
    };
}

export function receiveNewGame(game) {
    return {
        type: 'RECEIVE_NEWGAME',
        game: game
    };
}

export function receiveJoinGame(game) {
    return {
        type: 'RECEIVE_JOINGAME',
        game: game
    };
}

export function receiveUpdateGame(game) {
    return {
        type: 'RECEIVE_UPDATEGAME',
        game: game
    };
}

export function receiveLeaveGame(game, isMe) {
    return {
        type: 'RECEIVE_LEAVEGAME',
        game: game,
        isMe: isMe
    };
}

export function receiveGameState(state) {
    return {
        type: 'RECEIVE_GAMESTATE',
        state: state
    };
}

