 <!-- eslint-disable -->
 <template>
  <v-content>
    <v-container class="mt-5">
      <v-card class="my-3 pa-5">
        <h1>​Instructions</h1>
        <br />
        <ol>
          <li>Fill in the registration form.</li>
          <li>Agree to the Terms and Conditions.</li>
          <li>Choose if you would like to receive news and offers from us. You can stop receiving this information at any time by clicking “Unsubscribe” at the bottom of any e-communication from us.</li>
          <li>Click ACCEPT AND CONNECT. Upon completing the registration process, your device will be recognised when you next return.</li>
        </ol>
        <br />
        <br />
        <v-divider></v-divider>
        <br />
        <h2>​Help & FAQs​</h2>​
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Can I use more than one device?</v-expansion-panel-header>
            <v-expansion-panel-content>
              Yes. You will need to go through the registration on each device
              separately.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Can I use a VPN?</v-expansion-panel-header>
            <v-expansion-panel-content>
              YES! In fact, if you are connecting to the internet through your own
              laptop we would recommend using a VPN client for secure access to
              company intranets and mail servers. Check that your company VPN supports
              NAT traversal and allows multiple connections from a single IP address.
              Check with your IT staff. Please ensure that you are logged in through
              the portal page before you use your VPN.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Are there any data usage limits?</v-expansion-panel-header>
            <v-expansion-panel-content>
              As detailed in our Terms and Conditions there is a fair usage policy of
              20GB per month.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Do you block certain websites?</v-expansion-panel-header>
            <v-expansion-panel-content>
              We block certain categories to help protect WiFi users from accessing
              malicious or inappropriate content. If you feel that a site is
              incorrectly blocked, please let us know so that we can investigate. If
              you require more stringent content filtering, we would recommend
              installing a third party application on your device. Please note that we
              are not responsible for the security of your data or your device. The
              security of your connected device is your responsibility, and we
              recommend that your firewall and antivirus software is correctly
              configured and up to date. If young children are using the WiFi, we
              recommend installing a content filtering application on the device.
              Please see the Ofcom website for further information.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>What speeds can I expect?</v-expansion-panel-header>
            <v-expansion-panel-content>
              We aim to offer you high-speed internet access that is suitable most
              internet tasks such as browsing, VPN and streaming. There are some
              variables which can affect the internet data speeds. These include the
              number of people browsing on our network at that given time and also the
              quality of the wireless signal.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>I am having issues connecting to the Internet</v-expansion-panel-header>
            <v-expansion-panel-content>
              If you require assistance with the WiFi, please speak to a member of
              staff. Alternatively, you could try resetting your device account. By
              clicking the link below, you will be asked to re-register.
              <a
                href="#"
              >​Reset device account</a>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>How can I get help with the Free WiFi?</v-expansion-panel-header>
            <v-expansion-panel-content>
              If you require assistance with the WiFi, please speak to a member of
              staff.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card-actions class="mt-4">
          <v-btn color="#003264" dark to="/home">Back to login panel</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style></style>
