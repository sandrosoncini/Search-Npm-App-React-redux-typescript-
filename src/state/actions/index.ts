import { ActionType } from '../action-types'

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string [];
}

interface SearchRepositoriesErrors {
    type: ActionType.SEARCH_REPOSITORIES_ERRORS;
    payload: string;
}

export type Action = 
SearchRepositoriesAction |
SearchRepositoriesSuccess |
SearchRepositoriesErrors;