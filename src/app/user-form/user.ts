/**
 * User to play here
 */
export class User {
    /**
     * User class constructor
     * @param firstName users firstname
     * @param email users email
     * @param country (optional) users country
     */
    constructor(
        public firstName: string,
        public email: string,
        public country?: string
    ) { }
}
