let teams = [
    {
        id: 1,
        tname: "Bor Ji",
        tl: "Bor",
        email: "bor.ji@example.com",
        members: 6,
    },
    {
        id: 2,
        tname: "Dots",
        tl: "Dots Ji",
        email: "dots.ji@example.com",
        members: 8,
    }
];

let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find(team => team.id === id);
export const addTeam = (newTeam) => {
    const team = {
        id: nextId++,
        newTeam
    };
    teams.push(team);
    return team;
};

export const updateTeamsById =  (id, updatedTeam) => {
    const team = getTeamById(id);
    if (!team) {
        return null;
    }
    Object.assign(team, updatedTeam);
    return team;
};

export const deleteTeamById = (id) => {
    const index = teams.findIndex(team => team.id === id);
    if (index === -1) {
        return null;
    }
    return teams.splice(index, 1)[0];
};
