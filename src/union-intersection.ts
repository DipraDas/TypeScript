type NoobDeveloper = {
    name: string
}

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experice: number
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Dipra",
    expertise: "Javascript",
    experice: 1
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "junior" | "mid" | "senior";
}