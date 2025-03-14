import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputCheckboxComponent } from './components/form/input-checkbox/input-checkbox.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ErrorModalComponent } from './components/error/error-modal/error-modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ButtonWhatsappComponent } from './components/buttons/button-whatsapp/button-whatsapp.component';
import { IconComponent } from './components/icon/icon.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { GridListComponent } from './components/layout/grid-list/grid-list.component';
import { ErrorListMessageComponent } from './components/error/error-list-message/error-list-message.component';
import { JoinStringPipe } from './pipes/join-string.pipe';
import { InputPasswordComponent } from './components/form/input-password/input-password.component';
import { PasswordModule } from 'primeng/password';
import { MobileLinksComponent } from './components/navigation/mobile-links/mobile-links.component';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MaskPipe } from './pipes/mask.pipe';
import { RadioButtonComponent } from './components/form/radio-button/radio-button.component';
import { SelectComponent } from './components/form/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelComponent } from './components/layout/scroll-panel/scroll-panel.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastContentComponent } from './components/misc/toast-content/toast-content.component';
import { BarraDeNavegacaoComponent } from './components/navigation/barra-de-navegacao/barra-de-navegacao.component';
import { DesktopLinksComponent } from './components/navigation/barra-de-navegacao/components/desktop-links/desktop-links.component';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { CarrinhoComponent } from './components/navigation/barra-de-navegacao/components/carrinho/carrinho.component';
import { RadioPanelComponent } from './components/form/radio-panel/radio-panel.component';
import { RodapeComponent } from './components/navigation/rodape/rodape.component';
import { FormatEnderecoPipe } from './pipes/formatEndereco.pipe';
import { LoadingModalComponent } from './components/modals/loading-modal/loading-modal.component';
import { DetalhesPedidoComponent } from './components/misc/detalhes-pedido/detalhes-pedido.component';
import { DividerModule } from 'primeng/divider';
import { ResumoPedidoComponent } from './components/misc/detalhes-pedido/components/resumo-pedido/resumo-pedido.component';
import { ItensPedidoComponent } from './components/misc/detalhes-pedido/components/itens-pedido/itens-pedido.component';
import { ButtonLoginComponent } from './components/buttons/button-login/button-login.component';
import { ErrorBoxComponent } from './components/error/error-box/error-box.component';
import { AutocompleteComponent } from './components/form/autocomplete/autocomplete.component';
import { MenuLateralComponent } from './components/navigation/menu-lateral/menu-lateral.component';
import { LateralDesktopLinksComponent } from './components/navigation/menu-lateral/components/lateral-desktop-links/lateral-desktop-links.component';
import { PanelModule } from 'primeng/panel';
import { PageWrapperComponent } from './components/layout/page-wrapper/page-wrapper.component';
import { DashboardWrapperComponent } from './components/layout/dashboard-wrapper/dashboard-wrapper.component';
import { TableComponent } from './components/layout/table/table.component';
import { TableModule } from 'primeng/table';
import { PageTitleComponent } from './components/misc/page-title/page-title.component';
import { InputTextSearchComponent } from './components/form/input-text-search/input-text-search.component';
import { CalendarModule } from 'primeng/calendar';
import { DatepickerComponent } from './components/form/datepicker/datepicker.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ErrorNoResultsComponent } from './components/error/error-no-results/error-no-results.component';
import { BadgeEnvironmentComponent } from './components/misc/badge-environment/badge-environment.component';
import { MultiselectComponent } from './components/form/multiselect/multiselect.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SwitchComponent } from './components/form/switch/switch.component';
import { TooltipComponent } from './components/misc/tooltip/tooltip.component';
import { TooltipModule } from 'primeng/tooltip';
import { FormFieldsetComponent } from './components/layout/form-fieldset/form-fieldset.component';
import { NgOptimizedImage } from '@angular/common';
import { InputTextareaComponent } from './components/form/input-textarea/input-textarea.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InlineBoxRadioComponent } from './components/form/inline-box-radio/inline-box-radio.component';
import { InputNumberComponent } from './components/form/input-number/input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { NoSubmitWithEnterDirective } from './directives/no-submit-with-enter/no-submit-with-enter.directive';
import { SearchCidadeComponent } from './components/form/search-cidade/search-cidade.component';
import { SocialMediaComponent } from './components/navigation/rodape/components/social-media/social-media.component';
import { CardProdutosComponent } from './components/misc/card-produtos/card-produtos.component';
import { SkeletonCardProdutosComponent } from './components/misc/skeleton-card-produtos/skeleton-card-produtos.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/navigation/breadcrumb/breadcrumb.component';
import { ImageModule } from 'primeng/image';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectButtonComponent } from './components/form/select-button/select-button.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { VideoModalComponent } from './components/modals/video-modal/video-modal.component';
import { CheckboxGroupComponent } from './components/form/checkbox-group/checkbox-group.component';
import { FormModalComponent } from './components/modals/form-modal/form-modal.component';
import { FormTableComponent } from './components/form/form-table/form-table.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputCheckboxComponent,
    ButtonComponent,
    ErrorModalComponent,
    CarouselComponent,
    ButtonWhatsappComponent,
    IconComponent,
    SidebarComponent,
    GridListComponent,
    AutocompleteComponent,
    ErrorListMessageComponent,
    InputPasswordComponent,
    MobileLinksComponent,
    ConfirmationModalComponent,
    JoinStringPipe,
    MaskPipe,
    RadioButtonComponent,
    SelectComponent,
    ScrollPanelComponent,
    ToastContentComponent,
    BarraDeNavegacaoComponent,
    DesktopLinksComponent,
    CarrinhoComponent,
    RodapeComponent,
    RadioPanelComponent,
    FormatEnderecoPipe,
    LoadingModalComponent,
    DetalhesPedidoComponent,
    ResumoPedidoComponent,
    ItensPedidoComponent,
    ButtonLoginComponent,
    ErrorBoxComponent,
    MenuLateralComponent,
    LateralDesktopLinksComponent,
    PageWrapperComponent,
    DashboardWrapperComponent,
    TableComponent,
    PageTitleComponent,
    InputTextSearchComponent,
    DatepickerComponent,
    ErrorNoResultsComponent,
    BadgeEnvironmentComponent,
    MultiselectComponent,
    SwitchComponent,
    TooltipComponent,
    FormFieldsetComponent,
    InputTextareaComponent,
    InlineBoxRadioComponent,
    InputNumberComponent,
    NoSubmitWithEnterDirective,
    SearchCidadeComponent,
    SocialMediaComponent,
    CardProdutosComponent,
    SkeletonCardProdutosComponent,
    BreadcrumbComponent,
    ModalComponent,
    SelectButtonComponent,
    VideoModalComponent,
    CheckboxGroupComponent,
    FormModalComponent,
    FormTableComponent,
  ],
  exports: [
    InputTextComponent,
    InputCheckboxComponent,
    ButtonComponent,
    ErrorModalComponent,
    CarouselComponent,
    ButtonWhatsappComponent,
    IconComponent,
    SidebarComponent,
    GridListComponent,
    ErrorListMessageComponent,
    AutocompleteComponent,
    ErrorListMessageComponent,
    InputPasswordComponent,
    MobileLinksComponent,
    JoinStringPipe,
    MaskPipe,
    RadioButtonComponent,
    SelectComponent,
    ScrollPanelComponent,
    ToastContentComponent,
    BarraDeNavegacaoComponent,
    RodapeComponent,
    RadioPanelComponent,
    FormatEnderecoPipe,
    LoadingModalComponent,
    DetalhesPedidoComponent,
    ButtonLoginComponent,
    ErrorBoxComponent,
    MenuLateralComponent,
    PageWrapperComponent,
    DashboardWrapperComponent,
    TableComponent,
    PageTitleComponent,
    InputTextSearchComponent,
    DatepickerComponent,
    ErrorNoResultsComponent,
    BadgeEnvironmentComponent,
    MultiselectComponent,
    SwitchComponent,
    TooltipComponent,
    FormFieldsetComponent,
    InputTextareaComponent,
    InlineBoxRadioComponent,
    InputNumberComponent,
    NoSubmitWithEnterDirective,
    SearchCidadeComponent,
    CardProdutosComponent,
    SkeletonCardProdutosComponent,
    ModalComponent,
    SelectButtonComponent,
    VideoModalComponent,
    CheckboxGroupComponent,
    FormModalComponent,
    FormTableComponent,
  ],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DialogModule,
    CarouselModule,
    SidebarModule,
    AutoCompleteModule,
    PasswordModule,
    AccordionModule,
    RouterModule,
    DynamicDialogModule,
    RadioButtonModule,
    DropdownModule,
    ScrollPanelModule,
    BadgeModule,
    MenuModule,
    DividerModule,
    PanelModule,
    TableModule,
    CalendarModule,
    SkeletonModule,
    MultiSelectModule,
    InputSwitchModule,
    TooltipModule,
    NgOptimizedImage,
    InputTextareaModule,
    InputNumberModule,
    BreadcrumbModule,
    ImageModule,
    ConfirmDialogModule,
    SelectButtonModule,
    DynamicDialogModule,
  ],
  providers: [ConfirmationService, MessageService]
})
export class SharedModule { }
