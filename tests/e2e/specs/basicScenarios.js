// Define the test suite "Metamask Basic tests"
describe('Metamask Basic tests', () => {

    // Define the test case"
    it('connect to DApp with Metamask extension', () => {
  
      // Add a new network to Metamask using the `cy.addMetamaskNetwork()` command
      cy.addMetamaskNetwork({
        networkName: 'Web3 Workshop local',
        rpcUrl: 'HTTP://127.0.0.1:7545',
        chainId: '1337',
        symbol: 'ETH',
        isTestnet: true,
      })
  
      // Visit the root URL of the DApp
      cy.visit('/');
  
      // Click the "Connect" button on the DApp
      cy.get('#connectButton').click();
  
      // Accept the Metamask access request by clicking the "Connect" button in the Metamask popup
      cy.acceptMetamaskAccess().should('be.true');
  
      // Assert that the "Connect" button on the DApp shows the text "Connected"
      cy.get('#connectButton').should('have.text', 'Connected');
  
    });
  
    // Define the test case "create transaction"
    it('create transaction', () => {
  
      // Click the "Send" button on the DApp
      cy.get('#sendButton').click();
  
      // Confirm the Metamask transaction by clicking the "Confirm" button in the Metamask popup
      cy.confirmMetamaskTransaction().should('be.true');
    });
  
    // Define the test case "confirm signature"
    it('confirm signature', () => {
  
      // Click the "Sign" button on the DApp
      cy.get('#ethSign').click();
  
      // Confirm the Metamask signature request by clicking the "Sign" button in the Metamask popup
      cy.confirmMetamaskSignatureRequest().should('be.true');
    });
  })